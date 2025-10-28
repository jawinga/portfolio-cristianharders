export default function SheetVisionArchitecture() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 mt-10">
      {/* Title Section */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fefffe] mb-3 sm:mb-4">
          Tech Stack
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#b8b8b8] font-medium">
          Upload → Parse → Normalize → Adapt → Visualize → Export / Insights
        </p>
      </div>

      {/* Main Lane */}
      <div className="bg-[#2b1111] rounded-xl sm:rounded-2xl border border-[#5c2020] p-4 sm:p-6 md:p-8">
        <p className="text-xs font-semibold text-[#fefffe] mb-4 sm:mb-6">
          Client (Angular 17 • TypeScript • SCSS)
        </p>

        {/* Top Row - Main Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {/* 1. Upload */}
          <div className="bg-[#331515] border-2 border-[#ed1313] rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:shadow-lg hover:shadow-[#ed1313]/20 transition-all duration-300">
            <h3 className="text-base sm:text-lg font-semibold text-[#fefffe] mb-1 sm:mb-2">
              Upload
            </h3>
            <p className="text-xs sm:text-sm text-[#b8b8b8] mb-2 sm:mb-3">
              Drag & Drop • File Picker
            </p>
            <span className="inline-block bg-[#b8b8b8] text-[#22100e] text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
              .xlsx / .xls
            </span>
          </div>

          {/* 2. Parse */}
          <div className="bg-[#331515] border-2 border-[#ed1313] rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:shadow-lg hover:shadow-[#ed1313]/20 transition-all duration-300">
            <h3 className="text-base sm:text-lg font-semibold text-[#fefffe] mb-1 sm:mb-2">
              Parse
            </h3>
            <p className="text-xs sm:text-sm text-[#b8b8b8] mb-1">
              SheetJS (xlsx) → JSON
            </p>
            <p className="text-xs sm:text-sm text-[#b8b8b8]">
              Sample rows • Types • Merges
            </p>
          </div>

          {/* 3. Detectors & Guards */}
          <div className="bg-[#331515] border-2 border-[#ff2a2a] rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:shadow-lg hover:shadow-[#ff2a2a]/20 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-[#ff2a2a]/10 rounded-full blur-2xl"></div>
            <h3 className="text-base sm:text-lg font-semibold text-[#fefffe] mb-1 sm:mb-2 relative z-10">
              Detectors & Guards
            </h3>
            <p className="text-xs sm:text-sm text-[#b8b8b8] mb-1 relative z-10">
              Header detection • Row profiling
            </p>
            <p className="text-xs sm:text-sm text-[#b8b8b8] mb-1 relative z-10">
              Ratios: text/number/date/empty
            </p>
            <p className="text-xs sm:text-sm text-[#b8b8b8] mb-2 sm:mb-3 relative z-10">
              Depth from merges • Fallbacks
            </p>
            <span className="inline-block bg-[#ed1313] text-[#fefffe] text-xs font-bold px-2 sm:px-3 py-1 rounded-full relative z-10">
              Confidence Score
            </span>
          </div>

          {/* 4. Normalize */}
          <div className="bg-[#331515] border-2 border-[#ed1313] rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:shadow-lg hover:shadow-[#ed1313]/20 transition-all duration-300">
            <h3 className="text-base sm:text-lg font-semibold text-[#fefffe] mb-1 sm:mb-2">
              Normalize
            </h3>
            <p className="text-xs sm:text-sm text-[#b8b8b8] mb-1">
              Columns • Rows • Types
            </p>
            <p className="text-xs sm:text-sm text-[#b8b8b8]">Clean schema</p>
          </div>
        </div>

        {/* Arrow Indicator */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-[#ed1313] animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>

        {/* Bottom Row - Processing & Rendering */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {/* 5. Adapter Layer */}
          <div className="bg-[#331515] border-2 border-[#ed1313] rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:shadow-lg hover:shadow-[#ed1313]/20 transition-all duration-300">
            <h3 className="text-base sm:text-lg font-semibold text-[#fefffe] mb-1 sm:mb-2">
              Adapter Layer
            </h3>
            <p className="text-xs sm:text-sm text-[#b8b8b8] mb-1">
              Bar • Line • Area • Doughnut
            </p>
            <p className="text-xs sm:text-sm text-[#b8b8b8]">
              ChartConfig builder
            </p>
          </div>

          {/* 6. Aggregation */}
          <div className="bg-[#331515] border-2 border-[#ed1313] rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:shadow-lg hover:shadow-[#ed1313]/20 transition-all duration-300">
            <h3 className="text-base sm:text-lg font-semibold text-[#fefffe] mb-1 sm:mb-2">
              Aggregation
            </h3>
            <p className="text-xs sm:text-sm text-[#b8b8b8] mb-1">
              Group duplicates
            </p>
            <p className="text-xs sm:text-sm text-[#b8b8b8]">
              sum • avg • count
            </p>
          </div>

          {/* 7. Chart.js Rendering */}
          <div className="bg-[#331515] border-2 border-[#ed1313] rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:shadow-lg hover:shadow-[#ed1313]/20 transition-all duration-300">
            <h3 className="text-base sm:text-lg font-semibold text-[#fefffe] mb-1 sm:mb-2">
              Chart.js Rendering
            </h3>
            <p className="text-xs sm:text-sm text-[#b8b8b8] mb-1">
              Responsive • Animations
            </p>
            <p className="text-xs sm:text-sm text-[#b8b8b8]">
              Palette & theming
            </p>
          </div>

          {/* 8. UI */}
          <div className="bg-[#331515] border-2 border-[#ed1313] rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:shadow-lg hover:shadow-[#ed1313]/20 transition-all duration-300">
            <h3 className="text-base sm:text-lg font-semibold text-[#fefffe] mb-1 sm:mb-2">
              UI
            </h3>
            <p className="text-xs sm:text-sm text-[#b8b8b8] mb-1">
              Angular components
            </p>
            <p className="text-xs sm:text-sm text-[#b8b8b8]">Accessibility</p>
          </div>
        </div>

        {/* Arrow Indicator */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff2a2a] animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>

        {/* Final Row - Export & Insights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-full sm:max-w-2xl mx-auto">
          {/* 9. Export */}
          <div className="bg-[#331515] border-2 border-[#ed1313] rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:shadow-lg hover:shadow-[#ed1313]/20 transition-all duration-300">
            <h3 className="text-base sm:text-lg font-semibold text-[#fefffe] mb-1 sm:mb-2">
              Export
            </h3>
            <p className="text-xs sm:text-sm text-[#b8b8b8]">
              PNG • (Future) PDF
            </p>
          </div>

          {/* 10. AI Insights */}
          <div className="bg-[#331515] border-2 border-[#ff2a2a] rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:shadow-lg hover:shadow-[#ff2a2a]/20 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-[#ff2a2a]/10 rounded-full blur-2xl"></div>
            <h3 className="text-base sm:text-lg font-semibold text-[#fefffe] mb-1 sm:mb-2 relative z-10">
              AI Insights (Coming Soon)
            </h3>
            <p className="text-xs sm:text-sm text-[#b8b8b8] relative z-10">
              Text summary from chart
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
