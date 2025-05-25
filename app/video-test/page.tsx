export default function VideoTest() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">Video Test Page</h1>
      
      <div>
        <h2 className="text-xl mb-2">Test 1: Basic HTML video - blackhole.mp4</h2>
        <video 
          src="/assets/blackhole.mp4"
          autoPlay
          muted
          loop
          controls
          className="w-full max-w-2xl"
        />
      </div>

      <div>
        <h2 className="text-xl mb-2">Test 2: Basic HTML video - herovid.mp4</h2>
        <video 
          src="/assets/herovid.mp4"
          autoPlay
          muted
          loop
          controls
          className="w-full max-w-2xl"
        />
      </div>

      <div>
        <h2 className="text-xl mb-2">Test 3: No autoplay - blackhole.mp4</h2>
        <video 
          src="/assets/blackhole.mp4"
          muted
          loop
          controls
          className="w-full max-w-2xl"
        />
      </div>
    </div>
  );
}