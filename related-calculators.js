const RELATED_CALCULATORS = [
  { href: 'index.html', title: 'Age calculator', desc: 'Find exact age in years, months, days, and more.' },
  { href: 'age-difference.html', title: 'Age difference', desc: 'Compare two birthdays and see the exact gap.' },
  { href: 'birthday-countdown.html', title: 'Birthday countdown', desc: 'See how many days remain until the next birthday.' },
  { href: 'date-calculator.html', title: 'Date calculator', desc: 'Add or subtract dates and measure time spans.' },
  { href: 'day-of-week.html', title: 'Day of week', desc: 'Check what weekday any date falls on.' },
  { href: 'life-progress.html', title: 'Life progress', desc: 'Visualize how much of life milestones has passed.' },
  { href: 'tax-calculator.html', title: 'Tax calculator', desc: 'Estimate taxes, deductions, and take-home pay.' },
  { href: 'retirement-calculator.html', title: 'Retirement calculator', desc: 'Project retirement savings and income goals.' },
  { href: 'loan-calculator.html', title: 'Loan calculator', desc: 'Estimate monthly payments and total interest.' },
  { href: 'college-cost-calculator.html', title: 'College cost calculator', desc: 'Estimate tuition growth and future education costs.' },
  { href: 'currency-converter.html', title: 'Currency converter', desc: 'Convert major world currencies instantly.' },
  { href: 'pension-calculator.html', title: 'Pension calculator', desc: 'Estimate pension or social security benefits.' }
];

function injectRelatedCalculators() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const links = RELATED_CALCULATORS
    .filter(item => item.href !== path)
    .slice(0, 6)
    .map(item => `
      <a class="related-item" href="${item.href}">
        <strong>${item.title}</strong>
        <span>${item.desc}</span>
      </a>
    `)
    .join('');

  const section = document.createElement('section');
  section.className = 'related-calculators';
  section.innerHTML = `
    <div class="related-calculators-card">
      <h2>Related calculators</h2>
      <p>Explore more free tools for age, dates, money, and planning.</p>
      <div class="related-grid">${links}</div>
    </div>
  `;

  const footer = document.querySelector('footer');
  const page = document.querySelector('.page, .legal');

  if (footer) {
    footer.parentNode.insertBefore(section, footer);
    return;
  }

  if (page) {
    page.appendChild(section);
  } else {
    document.body.appendChild(section);
  }
}

document.addEventListener('DOMContentLoaded', injectRelatedCalculators);
