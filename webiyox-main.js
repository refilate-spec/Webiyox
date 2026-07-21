/* ==========================================================================
   AGS ULTIMATE RATING ENGINE v6.0 (Final & Zero-Maintenance)
   ========================================================================== */
(function() {
  'use strict';

  // 1. Auto-inject SVG Gradients & Masks silently on load (No manual SVG needed)
  if (!document.getElementById('ags-global-svg-masks')) {
    const svgContainer = document.createElement('div');
    svgContainer.id = 'ags-global-svg-masks';
    svgContainer.style.cssText = 'position: absolute; width: 0; height: 0; overflow: hidden; pointer-events: none;';
    svgContainer.innerHTML = `
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="starGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f59e0b" />
            <stop offset="100%" stop-color="#b45309" />
          </linearGradient>
          <linearGradient id="starGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fbbf24" />
            <stop offset="100%" stop-color="#d97706" />
          </linearGradient>
          <linearGradient id="starGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fcd34d" />
            <stop offset="100%" stop-color="#f59e0b" />
          </linearGradient>
          <linearGradient id="starGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fde68a" />
            <stop offset="100%" stop-color="#fbbf24" />
          </linearGradient>
        </defs>
      </svg>
    `;
    document.body.appendChild(svgContainer);
  }

  const svgStarPath = '<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>';

  const rowGradients = {
    5: { grad: "linear-gradient(90deg, #f59e0b, #d97706)", glow: "rgba(245, 158, 11, 0.4)", color: "#f59e0b" },
    4: { grad: "linear-gradient(90deg, #10b981, #34d399)", glow: "rgba(16, 185, 129, 0.4)", color: "#10b981" },
    3: { grad: "linear-gradient(90deg, #0ea5e9, #22d3ee)", glow: "rgba(14, 165, 233, 0.4)", color: "#0ea5e9" },
    2: { grad: "linear-gradient(90deg, #f97316, #fb7185)", glow: "rgba(249, 115, 22, 0.4)", color: "#f97316" },
    1: { grad: "linear-gradient(90deg, #f43f5e, #be123c)", glow: "rgba(244, 63, 94, 0.4)", color: "#f43f5e" }
  };

  function renderRatingWidget() {
    const container = document.getElementById('ags-rating-analytics-widget');
    if (!container) return;

    // Read metrics directly from post HTML attributes
    const ratingData = {
      rating: parseFloat(container.getAttribute('data-rating')) || 4.5,
      totalReviews: container.getAttribute('data-reviews') || "1,000",
      reviewSubtext: container.getAttribute('data-subtext') || "Based on verified ratings.",
      badgeText: container.getAttribute('data-badge') || "Verified Reviews",
      distribution: {
        5: parseFloat(container.getAttribute('data-d5')) || 70,
        4: parseFloat(container.getAttribute('data-d4')) || 20,
        3: parseFloat(container.getAttribute('data-d3')) || 5,
        2: parseFloat(container.getAttribute('data-d2')) || 3,
        1: parseFloat(container.getAttribute('data-d1')) || 2
      }
    };

    const r = Math.max(1, Math.min(5, ratingData.rating));
    const fullStarsCount = Math.floor(r);
    const fraction = r - fullStarsCount;
    const hasFraction = fraction > 0;
    const emptyStarsCount = 5 - fullStarsCount - (hasFraction ? 1 : 0);

    // Stars Assembly
    let starsHtml = '';
    for (let i = 0; i < fullStarsCount; i++) {
      starsHtml += `
        <div class="star-item star-full" tabindex="0" role="img" aria-label="${i+1}st star full">
          <svg viewBox="0 0 24 24">${svgStarPath}</svg>
        </div>`;
    }

    if (hasFraction) {
      const percentageWidth = Math.round(fraction * 100);
      starsHtml += `
        <div class="star-item star-fractional" tabindex="0" role="img" aria-label="fractional star ${percentageWidth} percent">
          <div class="star-fractional-inner" style="width: ${percentageWidth}%;">
            <svg viewBox="0 0 24 24">${svgStarPath}</svg>
          </div>
          <svg class="star-base-empty" viewBox="0 0 24 24">${svgStarPath}</svg>
        </div>`;
    }

    for (let i = 0; i < emptyStarsCount; i++) {
      starsHtml += `
        <div class="star-item star-empty" tabindex="0" role="img" aria-label="empty star">
          <svg viewBox="0 0 24 24">${svgStarPath}</svg>
        </div>`;
    }

    // Distribution Breakdown Bars
    let distributionHtml = '';
    [5, 4, 3, 2, 1].forEach((starNum, index) => {
      const percentage = ratingData.distribution[starNum] || 0;
      const config = rowGradients[starNum];
      
      let rowStarsHtml = '';
      for (let s = 1; s <= 5; s++) {
        if (s <= starNum) {
          rowStarsHtml += `<svg viewBox="0 0 24 24" style="fill: ${config.color};">${svgStarPath}</svg>`;
        } else {
          rowStarsHtml += `<svg viewBox="0 0 24 24" class="star-inactive-outline">${svgStarPath}</svg>`;
        }
      }

      distributionHtml += `
        <div class="rating-bar-row" style="--bar-grad: ${config.grad}; --bar-glow: ${config.glow};">
          <span class="row-number">${starNum}</span>
          <div class="row-stars">${rowStarsHtml}</div>
          <div class="bar-container">
            <div class="bar-fill" style="width: ${percentage}%; animation-delay: ${(index + 1) * 0.1}s;"></div>
          </div>
          <span class="row-percentage">${percentage}%</span>
        </div>`;
    });

    // Final Card Rendering
    container.innerHTML = `
      <div class="rating-card" role="region" aria-label="Customer Rating Analytics">
        <div class="rating-grid">
          <div class="rating-left">
            <div class="badge-row">
              <div class="verified-badge">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z"/></svg>
                ${ratingData.badgeText}
              </div>
            </div>

            <div class="score-container">
              <span class="score-number">${r.toFixed(1)}</span>
              <span class="score-max">/ 5.0</span>
            </div>

            <div class="stars-display" aria-label="${r.toFixed(1)} out of 5 stars">
              ${starsHtml}
            </div>

            <div class="reviews-count">
              <span aria-hidden="true">👤</span> ${ratingData.totalReviews}+ Reviews
            </div>
            <div class="reviews-subtext">${ratingData.reviewSubtext}</div>

            <div class="rating-divider" aria-hidden="true"></div>
          </div>

          <div class="rating-right">
            ${distributionHtml}
          </div>
        </div>
      </div>
    `;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderRatingWidget);
  } else {
    renderRatingWidget();
  }
})();

          

            
// End js rating code card.. 

// ?m=1 remove hs code start.. 
var uri = window.location.toString();
if (uri.indexOf("%3D","%3D") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("%3D"));
window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("%3D%3D","%3D%3D") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("%3D%3D"));
window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("&m=1","&m=1") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("&m=1"));
window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("?m=1","?m=1") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("?m=1"));
window.history.replaceState({}, document.title, clean_uri);
}
  // ?m=1 remove hs code end.. 

function toggleText() {
  const wrapper = document.getElementById("textWrapper");
  const btn = document.getElementById("toggleBtn");

  wrapper.classList.toggle("expanded");
  wrapper.classList.toggle("collapsed");

  if (wrapper.classList.contains("expanded")) {
    btn.innerHTML = "Show Less";
  } else {
    btn.innerHTML = "Show More";
  }
}

// show more btn js end 

