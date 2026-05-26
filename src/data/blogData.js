// src/data/blogData.js

import radiologyImage from '../../public/images/radiology_ocr_workflow.png';
import retrievalImage from '../../public/images/enterprise_knowledge_retrieval.png';
import reportingImage from '../../public/images/natural_language_reporting.png';

export const blogData = [
  {
    slug: 'document-intelligence-workflows',
    title: 'Designing Document Intelligence Workflows',
    image: radiologyImage,
    excerpt:
      'A practical framework for turning unstructured documents into reviewable business workflows.',
    content: `
      <p>Most document automation problems are not OCR problems — they are workflow problems.</p>

      <p>Teams rarely struggle because information exists. They struggle because information arrives inconsistently, requires interpretation, and creates manual operational work.</p>

      <h2>Observed workflow pattern</h2>
      <ul>
        <li>Document intake</li>
        <li>Extraction</li>
        <li>Validation</li>
        <li>Human review</li>
        <li>System output</li>
      </ul>

      <h2>Design approach</h2>
      <p>My approach is to preserve auditability while reducing repetitive effort.</p>

      <p>That means separating extraction from validation and ensuring AI recommendations remain reviewable before entering production systems.</p>

      <h2>Typical architecture components</h2>
      <ul>
        <li>OCR and document extraction</li>
        <li>Structured data mapping</li>
        <li>Workflow routing</li>
        <li>Business rule validation</li>
        <li>Human approval loops</li>
      </ul>

      <h2>Takeaway</h2>
      <p>Good automation reduces operational load without removing visibility or control.</p>
    `,
  },
  {
    slug: 'building-trustworthy-retrieval-systems',
    title: 'Building Retrieval Systems Teams Can Trust',
    image: retrievalImage,
    excerpt:
      'What retrieval systems need before conversational interfaces become useful.',
    content: `
      <p>Search and conversational experiences fail when people stop trusting the answers.</p>

      <p>Retrieval systems become useful when users can understand where information came from and verify it quickly.</p>

      <h2>What matters most</h2>
      <ul>
        <li>Source grounding</li>
        <li>Citation visibility</li>
        <li>Clean ingestion</li>
        <li>Version awareness</li>
        <li>Reliable retrieval</li>
      </ul>

      <h2>Design principles</h2>
      <p>Conversation should be the interface — not the source of truth.</p>

      <p>The system should retrieve, organize, and explain information rather than invent answers.</p>

      <h2>Typical architecture components</h2>
      <ul>
        <li>Structured ingestion</li>
        <li>Vector retrieval</li>
        <li>Metadata enrichment</li>
        <li>Citation generation</li>
        <li>Human feedback loops</li>
      </ul>

      <h2>Takeaway</h2>
      <p>People adopt systems they can understand and verify.</p>
    `,
  },
  {
    slug: 'natural-language-reporting',
    title: 'Designing Natural-Language Reporting Systems',
    image: reportingImage,
    excerpt:
      'Translating business questions into governed reporting workflows across legacy operational data.',
    content: `
      <p>Most reporting challenges are not dashboard problems — they are translation problems.</p>

      <p>People ask business questions. Systems expect structured logic, governed metrics, and historical context.</p>

      <h2>Observed workflow pattern</h2>
      <ul>
        <li>User intent capture</li>
        <li>Business terminology normalization</li>
        <li>Metric and dimension mapping</li>
        <li>Query generation</li>
        <li>Result validation and presentation</li>
      </ul>

      <h2>Design approach</h2>
      <p>I think of reporting systems as translators between operational language and governed data structures.</p>

      <p>The goal is not to replace analytics teams — it is to reduce friction between questions and usable information.</p>

      <h2>Typical architecture components</h2>
      <ul>
        <li>Semantic modeling</li>
        <li>Retrieval and metadata layers</li>
        <li>Natural-language interpretation</li>
        <li>Business-rule validation</li>
        <li>Structured reporting outputs</li>
      </ul>

      <h2>Takeaway</h2>
      <p>Good reporting systems help people spend less time learning systems and more time making decisions.</p>
    `,
  },
];