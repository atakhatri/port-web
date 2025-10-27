import TiltedCard from "@/components/TiltedCard";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-baseline items-center gap-8">
        <TiltedCard
          imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="Kendrick Lamar - GNX"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={10}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text text-black bg-amber-50  rounded-full p-2">
              Welcome to my gallery
            </p>
          }
        />
      </div>
    </div>
  );
}
