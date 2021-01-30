const o = window.createjs, globalScripts = async () => {
  /**
   * The code to be executed should be placed within a default function that is
   * exported by the global script. Ensure all of the code in the global script
   * is wrapped in the function() that is exported.
   */
  var resumeAudioContext = function() {
    // handler for fixing suspended audio context in Chrome
    try {
      o.WebAudioPlugin.context && "suspended" === o.WebAudioPlugin.context.state && (o.WebAudioPlugin.context.resume(), 
      // Should only need to fire once
      window.removeEventListener("click", resumeAudioContext));
    } catch (o) {
      // SoundJS context or web audio plugin may not exist
      console.error("There was an error while trying to resume the SoundJS Web Audio context..."), 
      console.error(o);
    }
  };
  window.addEventListener("click", resumeAudioContext);
};

export { globalScripts as g }