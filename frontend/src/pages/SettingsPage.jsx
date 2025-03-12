import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Send } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  { id: 2, content: "I'm doing great! Just working on some new features.", isSent: true },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-8">
        {/* Theme Selection Section */}
        <div className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-gray-900">Theme</h2>
            <p className="text-sm text-gray-500">Choose a theme for your chat interface</p>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
            {THEMES.map((t) => (
              <button
                key={t}
                className={`
                  group flex flex-col items-center gap-2 p-2 rounded-full transition-all
                  ${
                    theme === t
                      ? "ring-2 ring-primary ring-offset-2 bg-gray-50"
                      : "hover:bg-gray-50"
                  }
                `}
                onClick={() => setTheme(t)}
              >
                <div className="relative h-10 w-10 rounded-full overflow-hidden" data-theme={t}>
                  <div className="absolute inset-0 grid grid-cols-2 gap-px p-1">
                    <div className="rounded-tl-full bg-primary"></div>
                    <div className="rounded-tr-full bg-secondary"></div>
                    <div className="rounded-bl-full bg-accent"></div>
                    <div className="rounded-br-full bg-neutral"></div>
                  </div>
                </div>
                <span className="text-xs font-medium text-gray-700 truncate w-full text-center">
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Preview Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">Preview</h3>
          <div className="rounded-lg border border-gray-200 overflow-hidden bg-white shadow-sm">
            <div className="p-6 bg-gray-50">
              <div className="max-w-lg mx-auto">
                {/* Mock Chat UI */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  {/* Chat Header */}
                  <div className="px-5 py-4 border-b border-gray-200 bg-white">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                        J
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-gray-900">John Doe</h3>
                        <p className="text-xs text-gray-500">Online</p>
                      </div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-5 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-white">
                    {PREVIEW_MESSAGES.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`
                            max-w-[80%] rounded-lg p-3 shadow-sm
                            ${
                              message.isSent
                                ? "bg-primary text-white"
                                : "bg-gray-100 text-gray-900"
                            }
                          `}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p
                            className={`
                              text-[10px] mt-1.5
                              ${
                                message.isSent
                                  ? "text-white/70"
                                  : "text-gray-500"
                              }
                            `}
                          >
                            12:00 PM
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chat Input */}
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        className="input input-bordered flex-1 text-sm h-10 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary"
                        placeholder="Type a message..."
                        value="This is a preview"
                        readOnly
                      />
                      <button className="btn btn-primary h-10 min-h-0 flex items-center justify-center">
                        <Send size={18} className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;