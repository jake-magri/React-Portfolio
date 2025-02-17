import Image from 'next/image';
import aiTools from '../../public/images/ai-tools.jpg';
import aiLaptops from '../../public/images/ai-laptops.jpg';
import aiBooks from '../../public/images/ai-books.jpg';
import aiCloud from '../../public/images/ai-cloud.jpg';
import crypto from '../../public/images/crypto.jpg';
import miningHardware from '../../public/images/mining-hardware.jpg';
import pcHardware from '../../public/images/pc-hardware.jpg';
import graphicsCards from '../../public/images/graphics-cards.jpg';
// import styles from './Resources.module.css';
import SlidingText from './SlidingText';

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
      link: "https://www.amazon.com/Apple-2024-MacBook-13-inch-Laptop/dp/B0DM71Q965",
      image: aiLaptops,
    },
    {
      name: "Essential AI E-Books",
      description:
        "Master AI development with these top-rated e-books. Great for beginners and advanced developers alike.",
      link: "https://www.amazon.com/AutoGPT-Agents-Beginners-Complete-Guide/dp/B0C63VWF45",
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
      link: "https://www.newegg.com/?gad_source=1",
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
    <div className="max-w-5xl mx-auto px-4 pb-12 mt-8 sm:mt-12 md:mt-16 lg:mt-20 sm:mx-6">
      <SlidingText direction="top" text={<><h1 className="text-4xl font-semibold text-center text-gray-800 mb-6">
        Recommended Tools & Resources
      </h1> 
      <p className="text-lg text-center text-gray-700 mb-8">
        Enhance your AI development journey with these hand-picked resources.
        Click the links below to explore tools, software, and hardware that
        optimize your workflow. These are affiliate links, so purchasing through
        them helps support the blog at no additional cost to you!
      </p></>}/>
      <SlidingText direction="bottom" text={
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={resource.image}
              alt={resource.name}
              className="w-full h-56 object-cover"
              width={500} // set a default width
              height={350} // set a default height
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
      </div>}/>
    </div>
  );
}
