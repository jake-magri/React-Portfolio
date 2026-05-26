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
      'How document automation moves from OCR output to reviewable, auditable business workflows.',
    content: `
      <p>Most document automation problems are not solved by OCR alone.</p>

      <p>The harder problem is turning messy documents into structured workflow data that downstream systems can trust. A useful document-intelligence system needs intake, extraction, validation, human review, status tracking, and a predictable output format.</p>

      <h2>The workflow problem</h2>
      <p>Operational teams usually receive documents in inconsistent formats. Some fields are clear. Some are missing. Some require business context. If the system only extracts text, the team still has to interpret, validate, and re-key the result.</p>

      <h2>Design pattern</h2>
      <ul>
        <li>Accept documents through a controlled upload or intake path</li>
        <li>Store source files and job state in a traceable location</li>
        <li>Run OCR or layout extraction asynchronously when needed</li>
        <li>Map extracted labels and values into known business fields</li>
        <li>Use AI for long-tail interpretation while constraining outputs</li>
        <li>Route uncertain results into human review</li>
        <li>Persist a structured output that downstream systems already understand</li>
      </ul>

      <h2>Architecture considerations</h2>
      <p>A strong design separates document intake from processing, processing from validation, and validation from downstream posting. That makes the workflow easier to monitor, troubleshoot, and improve over time.</p>

      <p>For healthcare and billing workflows, auditability matters. The system should track job status, source document location, processing state, extracted fields, confidence, validation errors, and final output.</p>

      <h2>Human review is not a weakness</h2>
      <p>In production workflows, human review is often what makes AI usable. The goal is not to pretend every extraction is perfect. The goal is to reduce manual effort while keeping the user in control when confidence is low or business rules fail.</p>

      <h2>Where AI fits</h2>
      <p>AI is most useful when it is constrained by known fields, known tags, validation rules, and review states. The system should not invent business fields or silently push uncertain data into production workflows.</p>

      <h2>Takeaway</h2>
      <p>Good document intelligence turns unstructured inputs into operationally safe, reviewable, structured business workflows.</p>
    `,
  },
  {
    slug: 'building-trustworthy-retrieval-systems',
    title: 'Building Retrieval Systems Teams Can Trust',
    image: retrievalImage,
    excerpt:
      'The difference between a chatbot that answers questions and a knowledge system teams can verify.',
    content: `
      <p>Retrieval systems fail when users cannot tell where an answer came from.</p>

      <p>For internal teams, a useful AI support system has to do more than respond confidently. It has to retrieve the right source material, preserve context, expose citations, and make the answer easy to verify.</p>

      <h2>The real problem</h2>
      <p>Most organizations have useful knowledge spread across documentation, wikis, manuals, support notes, product references, and legacy systems. The information exists, but finding the right answer takes too long.</p>

      <h2>Design pattern</h2>
      <ul>
        <li>Ingest source content from a controlled repository or documentation system</li>
        <li>Normalize URLs, titles, headings, and source metadata</li>
        <li>Chunk content in a deterministic way</li>
        <li>Preserve source paths and citation metadata</li>
        <li>Upload a stable artifact or index to the retrieval system</li>
        <li>Skip unnecessary uploads when source content has not changed</li>
        <li>Track manifests and latest state for auditability</li>
      </ul>

      <h2>Why deterministic ingestion matters</h2>
      <p>If the same source content produces different chunks every run, the retrieval system becomes harder to debug. Stable chunk IDs, stable page IDs, and version-aware manifests make the pipeline easier to operate.</p>

      <h2>Conversation is the interface, not the source of truth</h2>
      <p>The model should not be treated as the knowledge base. The knowledge base is the indexed source material. The model is the interface that helps retrieve, organize, and explain that material.</p>

      <h2>Trust requirements</h2>
      <ul>
        <li>Source-grounded answers</li>
        <li>Visible citations</li>
        <li>Clear document provenance</li>
        <li>Repeatable ingestion</li>
        <li>Version-aware updates</li>
        <li>Fallback behavior when retrieval is weak</li>
      </ul>

      <h2>Takeaway</h2>
      <p>Teams adopt retrieval systems when they can verify the answer, trust the source, and understand the system’s limits.</p>
    `,
  },
  {
    slug: 'natural-language-reporting',
    title: 'Designing Natural-Language Reporting Systems',
    image: reportingImage,
    excerpt:
      'How business questions become governed reporting workflows instead of free-form query generation.',
    content: `
      <p>Most reporting challenges are not dashboard problems. They are translation problems.</p>

      <p>Business users ask questions in operational language. Reporting systems expect governed metrics, date roles, dimensions, filters, and valid data relationships. A natural-language reporting assistant has to bridge that gap without making silent assumptions.</p>

      <h2>The workflow problem</h2>
      <p>A user might ask a simple question, but the system still needs to know which metric, fact table, date role, filters, and grouping logic should be used. Without a governed semantic layer, natural-language reporting can become risky very quickly.</p>

      <h2>Design pattern</h2>
      <ul>
        <li>Capture user intent from the natural-language request</li>
        <li>Map business terminology to governed metrics and dimensions</li>
        <li>Validate the request against the available model graph</li>
        <li>Ask clarification questions when multiple interpretations exist</li>
        <li>Compile the resolved plan into a structured query</li>
        <li>Execute against the reporting system</li>
        <li>Return results with enough context for the user to understand them</li>
      </ul>

      <h2>Why clarification matters</h2>
      <p>Good reporting systems should prefer clarification over incorrect confidence. If the user does not specify the right time context, metric basis, or reporting dimension, the assistant should ask before executing.</p>

      <h2>Core architecture components</h2>
      <ul>
        <li>Semantic planner</li>
        <li>Clarification state</li>
        <li>Metric and dimension catalog</li>
        <li>Model graph validation</li>
        <li>Query compiler</li>
        <li>Execution layer</li>
        <li>Result formatting and export workflow</li>
      </ul>

      <h2>What this prevents</h2>
      <p>This design avoids free-form SQL or DAX generation, silent assumptions, mixed-fact queries, unknown metrics, and incorrect reporting outputs that look plausible but are wrong.</p>

      <h2>Takeaway</h2>
      <p>Natural-language reporting works best when AI is constrained by a governed semantic layer, explicit clarification, and deterministic execution rules.</p>
    `,
  },
];