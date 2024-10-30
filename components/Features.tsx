"use client";

const features = [
  { 
    title: 'AI-Powered Accuracy', 
    description: 'Our advanced AI ensures precise background removal for any image or video.' 
  },
  { 
    title: 'Lightning Fast', 
    description: 'Get results in seconds, not minutes. Perfect for high-volume processing.' 
  },
  { 
    title: 'Easy Integration', 
    description: 'Seamlessly integrate with your existing workflow using our robust API.' 
  },
  { 
    title: 'Secure & Private', 
    description: 'Your data is encrypted and never shared. We prioritize your privacy.' 
  },
  { 
    title: '24/7 Support', 
    description: 'Our expert team is always available to assist you with any questions.' 
  },
  { 
    title: 'Continuous Improvement', 
    description: 'We regularly update our AI models to provide even better results.' 
  }
];

export default function Features() {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center">Why Choose BackgroundBegone?</h2>
      <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-base text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}