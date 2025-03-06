"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16 lg:px-28">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-400 text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit nulla aliquet pretium nisi in cursus maecenas nec eleifen.
          </p>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              📍 <span>123 suscipit ipsum nam auctor, mauris dui, ac sollicitudin mauris, Bandung</span>
            </p>
            <p className="flex items-center gap-2">
              📞 <span>+1 2345 6789</span>
            </p>
            <p className="flex items-center gap-2">
              ✉️ <span>youremail@mail.com</span>
            </p>
          </div>
        </div>

        {/* Latest News with Images */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Latest News</h3>
          <div className="space-y-4">
            {["camera", "cup", "work"].map((img, index) => (
              <div key={index} className="flex items-center gap-3">
                <img
                  src={`https://source.unsplash.com/50x50/?${img}`}
                  alt="news"
                  className="w-12 h-12 object-cover rounded-md"
                />
                <div>
                  <p className="text-sm">Lorem ipsum dolor sit amet, consectetur</p>
                  <span className="text-xs text-gray-500">21th July 2016</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest News List */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Latest News</h3>
          <ul className="space-y-2 text-sm">
            {["Web Design", "User Interface Design", "E-Commerce", "Web Hosting", "Themes", "Support Forums"].map(
              (item, index) => (
                <li key={index} className="border-b border-gray-700 pb-2">
                  <a href="#" className="hover:text-white">
                    ➤ {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full px-4 py-2 text-black bg-gray-700 rounded-l-md"
            />
            <button className="bg-green-600 px-4 py-2 rounded-r-md hover:bg-green-500 transition">
              ➜
            </button>
          </div>
          <h3 className="text-white text-xl font-bold mt-4">YOUR LOGO</h3>
          <p className="text-gray-400 text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit nulla aliquet pretium nisi in.
          </p>
          {/* Social Icons */}
          <div className="flex gap-3 mt-4 text-lg">
            {["facebook", "twitter", "linkedin", "google", "behance"].map((icon, index) => (
              <span key={index} className="cursor-pointer hover:text-white transition">🔗</span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
        <p>
          Made with ❤️ by <a href="#" className="text-white hover:underline">Bootstrap Themes</a> 2016. All Rights Reserved
        </p>
        <p>
          Distributed by <a href="#" className="text-white hover:underline">Themewagon</a> 2016. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
