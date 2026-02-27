import { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

const DEFAULT_IMAGE =
  'https://fastly.picsum.photos/id/237/1200/800.jpg?hmac=Zig5Q0Oa_5oSGNOhgbpE-lgHzdREZIxTf94rVP1-uCg'

export interface FundingDetailsProps {
  image?: string
}

export const FundingDetails = ({ image }: FundingDetailsProps) => {
  const [didError, setDidError] = useState(false)

  // Sample data - replace with actual campaign data
  const raised = 45250
  const goal = 75000
  const percentComplete = (raised / goal) * 100
  const supporters = 342
  const daysLeft = 28

  return (
    <div className="w-screen ml-offset-center mt-1.5 2xl:mt-10">
      {/* Hero Container */}
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[500px] lg:min-h-[600px]">
          {/* Left Side - Campaign Content (Desktop) / Image First (Mobile) */}
          <div className="bg-white flex items-center lg:col-span-2 order-2 lg:order-1">
            <div className="w-full px-6 py-12 md:px-12 lg:px-12 lg:py-16">
              {/* Header */}
              <div className="mb-8">
                <span className="inline-block bg-red-100 text-red-800 text-xs font-medium px-3 py-1.5 mb-4 uppercase tracking-wide">
                  Active Campaign
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Annual Musical Production 2026</h1>
                <p className="text-base text-gray-600">Help bring the magic of live theater to our campus community</p>
              </div>

              {/* Campaign Progress */}
              <div className="mb-8">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-bold text-gray-900">${raised.toLocaleString()}</span>
                  <span className="text-base text-gray-600">of ${goal.toLocaleString()}</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-3 bg-gray-200 rounded-sm overflow-hidden mb-2">
                  <div
                    className="h-full bg-red-700 transition-all duration-500"
                    style={{ width: `${percentComplete}%` }}
                  />
                </div>
                <div className="text-sm font-medium text-gray-700">{Math.round(percentComplete)}% funded</div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-6 mb-10 pb-8 border-b border-gray-200">
                <div className="text-center md:text-left">
                  <div className="text-2xl font-bold text-gray-900">{Math.round(percentComplete)}%</div>
                  <div className="text-sm text-gray-600 mt-1">Complete</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-2xl font-bold text-gray-900">{supporters}</div>
                  <div className="text-sm text-gray-600 mt-1">Supporters</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-2xl font-bold text-gray-900">{daysLeft}</div>
                  <div className="text-sm text-gray-600 mt-1">Days Left</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-2xl font-bold text-gray-900">${Math.round(raised / supporters)}</div>
                  <div className="text-sm text-gray-600 mt-1">Average</div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-red-700 hover:bg-red-800 text-white font-bold py-4 px-8 rounded transition-colors duration-200">
                  Fund this Project
                </button>
                <button className="flex-1 sm:flex-initial bg-white hover:bg-gray-50 text-gray-900 font-bold py-4 px-8 rounded border-2 border-gray-300 hover:border-gray-400 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative lg:h-auto lg:col-span-3 order-1 lg:order-2">
            <img
              src={didError ? ERROR_IMG_SRC : image || DEFAULT_IMAGE}
              alt="Students performing in musical production"
              className="w-full h-full object-cover !m-0 !rounded-none 2xl:!rounded-lg"
              onError={() => setDidError(true)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

FundingDetails.displayName = 'FundingDetails'
