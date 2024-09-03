// ConferenceDetails.js
import React from 'react';
import './ConferenceDetails.scss';

const ConferenceDetails = () => {
  return (
    <div className="conference-details">
      <h2> <span>About</span> the Conference</h2>
      <p>
        Modern businesses operate in an environment that is more digitalized, densely networked, and fiercely competitive than it has ever been. It is essential to change with the time and adopt cutting-edge competencies embracing innovative practices if we want to expand and remain relevant in a bipolar world.
      </p>
      <p>
        With the title "Global Innovative Practices in Sustenance of Modern Businesses," an international conference is being conducted to deliberate on how to implement in our concerns applying creative, innovative, and inventive methods adopting best practices that encourage an innovative workforce to yield unprecedented, unparalleled, and unimaginative outcomes. Organizations may accelerate development, increase operational efficiency, and improve customer experience by adopting innovative business practices through their processes, technologies, cultures, and methodologies.
      </p>
      <p>
        Thus, the said international conference will allow the participating students, researchers, experts, academicians, and industry persons to share their knowledge, approaches, and working styles in the direction of the current business perception, progression, and praxis.
      </p>

      <h2>Conference <span>Topics</span> </h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Topics</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MARKETING</td>
            <td>
              <ul>
                <li>Consumer Behavior</li>
                <li>Marketing and Social Media</li>
                <li>Customer Relationship Management</li>
                <li>Ethical Issues in Marketing</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>HUMAN RESOURCE MANAGEMENT</td>
            <td>
              <ul>
                <li>Strategic HRM</li>
                <li>Contemporary & Entrepreneurial Leadership</li>
                <li>Organizational Development & Change Management</li>
                <li>Emotional Intelligence</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>ACCOUNTING & FINANCE</td>
            <td>
              <ul>
                <li>Accounting Challenges</li>
                <li>Risk Management</li>
                <li>Corporate Finance</li>
                <li>Investment & Portfolio Management</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>INFORMATION TECHNOLOGY</td>
            <td>
              <ul>
                <li>Information Systems</li>
                <li>Artificial Intelligence</li>
                <li>Marketing Analytics</li>
                <li>E-Business</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>INTERNATIONAL BUSINESS</td>
            <td>
              <ul>
                <li>International Business & Foreign Trade</li>
                <li>International Marketing</li>
                <li>Foreign Exchange Management</li>
                <li>Global Business Practices</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>OPERATIONS MANAGEMENT</td>
            <td>
              <ul>
                <li>Operations & Supply Chain Management</li>
                <li>Project Management</li>
                <li>Production Management</li>
                <li>Quality Management & Control</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ConferenceDetails;
