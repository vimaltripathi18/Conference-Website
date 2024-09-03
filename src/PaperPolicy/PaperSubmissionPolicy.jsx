import React from 'react';
import './PaperSubmissionPolicy.scss';

const PaperSubmissionPolicy = () => {
  return (
    <div className="policy-container">
      <h1> <span>Paper</span> Submission Policy</h1>
      <h4>Guidelines for Paper Submission</h4>
      <ul>
        <li>All The Papaer should be submitted before <strong>00 November 2024</strong></li>
        <li>All submissions must be in English only.</li>
        <li>
          All papers must be original and not simultaneously submitted to any other conference or journal.
        </li>
        <li>
          The abstract submission should be between 200 - 250 words in length and contain 7-10 keywords.
        </li>
        <li>
          Full Papers: On acceptance of the abstract, authors must submit the final paper within the deadline. The papers should be of 2000-2500 words in length (including references, tables, figures, and appendices).
        </li>
        <li>
          All submissions should be in Times New Roman, 12 Font size, single-spacing, with a 1-inch margin on all sides. Headings must be short, with a clear indication of the distinction between the hierarchies of headings.
        </li>
        <li>
          All referencing should be according to APA or Harvard Referencing Style.
        </li>
        <li>
          A separate cover page must contain: Title of the paper, Name, designation and affiliation of the author(s) & their contact details.
        </li>
        <li>
          Abstract and full paper submission must be made through <a href="mailto:uim.conference@gmail.com">uim.conference@gmail.com</a>.
        </li>
      </ul>
    </div>
  );
};

export default PaperSubmissionPolicy;
