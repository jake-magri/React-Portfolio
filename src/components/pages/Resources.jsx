import React from 'react';
import './Resources.css';
import aiTools from '../../assets/images/ai-tools.jpg';
import aiLaptops from '../../assets/images/ai-laptops.jpg';
import aiBooks from '../../assets/images/ai-books.jpg';
import aiCloud from '../../assets/images/ai-cloud.jpg';
import crypto from '../../assets/images/crypto.jpg';
import miningHardware from '../../assets/images/mining-hardware.jpg';
import pcHardware from '../../assets/images/pc-hardware.jpg';
import graphicsCards from '../../assets/images/graphics-cards.jpg';

export default function Resources() {
  const resources = [
    {
      name: "AI-Powered Development Tools",
      description:
        "Streamline your AI projects with cutting-edge development platforms. From model training to deployment, these tools are a must-have.",
      link: "https://github.com/features/copilot",
      image: aiTools,
    },
    {
      name: "Top AI Coding Laptops",
      description:
        "Explore powerful laptops optimized for AI programming and intensive workloads. Perfect for developers looking for speed and efficiency.",
      link: "https://www.amazon.com/Apple-2024-MacBook-13-inch-Laptop/dp/B0DM71Q965?crid=2R0PBA72KQH9M&dib=eyJ2IjoiMSJ9.R_VecUNDC_LtlyOjYn0mjqZrKlNB3tsqCUqBOwEIZ6gJ275W0-N2tEP8jhEe0J1wiuck_gUAPH4INijQPgV3ZqXTNqhTLFzUkjS26GwgFywgGk9gYdPlQ_WNpFPrj0Law3YKfupKEM8GqvNBTqHgl_6nDHUBus-_K9WQ9wtL1MVxzvwcAJiz-BimgfNKKakh6Lwm_lK7ukGkC57EpvnPfbdFPtl0diFkst6U0h-MSJw.Q5GnDDPT_C9eSE3yp5UnpriZep0P_IcSxZG9WIHM2TA&dib_tag=se&keywords=ai%2Blaptop&qid=1737593377&sprefix=AI%2BLaptop%2Caps%2C103&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll1&tag=jakemagrillc-20&linkId=c46397777665973609e0300ff8ba31ae&language=en_US&ref_=as_li_ss_tl",
      image: aiLaptops,
    },
    {
      name: "Essential AI E-Books",
      description:
        "Master AI development with these top-rated e-books. Great for beginners and advanced developers alike.",
      link: "https://www.amazon.com/AutoGPT-Agents-Beginners-Complete-Guide/dp/B0C63VWF45?crid=3KUCF7FB5C2RO&dib=eyJ2IjoiMSJ9.bGL8nuuJrd6tEr0UnHkUnQ.oaQ-GI2oUXvls4_t3-QyV9BHcPMjyvnLXLXLkxm1zWA&dib_tag=se&keywords=AutoGPT%3A+AI+Agents+for+Beginners+-+The+Complete+Guide.&qid=1737593251&sprefix=autogpt+ai+agents+for+beginners+-+the+complete+guide.%2Caps%2C67&sr=8-1&linkCode=ll1&tag=jakemagrillc-20&linkId=7f218fb707eb160cea2a056330c59873&language=en_US&ref_=as_li_ss_tl",
      image: aiBooks,
    },
    {
      name: "AI Cloud Services",
      description:
        "Discover scalable cloud solutions tailored for AI applications. Reduce costs and improve efficiency.",
      link: "https://aws.amazon.com/sagemaker/",
      image: aiCloud,
    },
    {
        name: "Crypto Digital Currency Exchange",
        description:
          "Discover scalable cloud solutions tailored for AI applications. Reduce costs and improve efficiency.",
        link: "https://www.coinbase.com/",
        image: crypto,
    },
    {
        name: "Crypto Mining Hardware",
        description:
          "Discover scalable cloud solutions tailored for AI applications. Reduce costs and improve efficiency.",
        link: "https://www.bitmain.com/",
        image: miningHardware,
    },
    {
        name: "PC Hardware",
        description:
          "Discover scalable cloud solutions tailored for AI applications. Reduce costs and improve efficiency.",
        link: "https://www.newegg.com/?gad_source=1&gclid=Cj0KCQiAy8K8BhCZARIsAKJ8sfTEPfOaHHjUQDEppL7PSgGijkO2DCmAusonMI9MVPeZrS0kNJ_jfJAaAsIaEALw_wcB",
        image: pcHardware,
    },
    {
        name: "Nvidia Graphics Cards",
        description:
          "Discover scalable cloud solutions tailored for AI applications. Reduce costs and improve efficiency.",
        link: "https://www.nvidia.com/en-us/",
        image: graphicsCards,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 pb-12">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6">
        Recommended Tools & Resources
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Enhance your AI development journey with these hand-picked resources.
        Click the links below to explore tools, software, and hardware that
        optimize your workflow. These are affiliate links, so purchasing through
        them helps support the blog at no additional cost to you!
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={resource.image}
              alt={resource.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{resource.name}</h3>
              <p className="text-gray-600 mt-2">{resource.description}</p>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
