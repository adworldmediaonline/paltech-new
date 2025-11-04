import { CheckCircle, Target, Eye, Heart, Users, Lightbulb, Phone, Mail, Globe } from "lucide-react";

export function OurMissionContent() {
  return (
    <div className="space-y-12">
      {/* Mission Statement */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Our Mission
        </h1>
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-primary mb-4">Description:</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>

      {/* Product Features (USP) */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">Product Features (USP):</h2>
        <div className="space-y-3">
          {[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
          ].map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 shrink-0"></div>
              <p className="text-gray-700 leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">Technical Specifications:</h2>
        <div className="space-y-3">
          {[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
          ].map((spec, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 shrink-0"></div>
              <p className="text-gray-700 leading-relaxed">{spec}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Price Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">Price:</h2>
        <p className="text-red-600 font-medium">
          Click on request a quote button below for pricing details
        </p>
      </div>

      {/* CTA Button */}
      <div className="flex justify-start">
        <button className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl">
          <Mail className="w-5 h-5" />
          Request a Quote
        </button>
      </div>
    </div>
  );
}

