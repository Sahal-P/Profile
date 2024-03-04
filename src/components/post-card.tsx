import Image from "next/image";

interface CardProps {
  discription: string;
  title: string;
  imageLink: string;
}

const Card = ({ discription, title, imageLink }: CardProps) => {
  return (
    <div className="relative relative flex grid min-h-[30rem] flex-col items-end overflow-hidden rounded-xl rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-md">
      <Image
        src={imageLink}
        width={100}
        height={100}
        alt="bg"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative flex flex-col justify-end p-6">
        <h4 className="block font-mono text-2xl font-semibold leading-snug tracking-normal text-white antialiased">
          {title}
        </h4>
        <p className="my-2 block font-mono text-xs  font-light font-normal leading-relaxed text-white antialiased">
          {discription}
        </p>
      </div>
    </div>
  );
};

const PostCard = ({}) => {
  const data = [
    {
      title: "Record-breaking Profits",
      discription:
        "We are proud to announce that our bank has achieved record-breaking profits this year. Thanks to our dedicated team and loyal customers, we have surpassed all expectations and set new industry standards. Read more to learn about our success story.",
      imageLink:
        "https://bucket.material-tailwind.com/magic-ai/58b51625af5803baea7811b7e9128c8b23c0706c3271fa863b6bc287c2d3958a.jpg",
    },
    {
      title: "Expansion into New Markets",
      discription:
        "We are excited to share that our bank has successfully expanded into new markets. With strategic partnerships and innovative solutions, we have established a strong presence in international markets. Learn more about our expansion journey and the opportunities it brings.",
      imageLink:
        "https://bucket.material-tailwind.com/magic-ai/36e7d64250cd9568062f658a26b4d0107c00235cb3b85fa4919b3ba4070c9bed.jpg",
    },
    {
      title: "Digital Transformation Success",
      discription:
        "Our bank has undergone a successful digital transformation, revolutionizing the way we serve our customers. From seamless online banking experiences to advanced security measures, we have embraced technology to enhance customer satisfaction. Discover the key milestones of our digital transformation journey.",
      imageLink:
        "https://bucket.material-tailwind.com/magic-ai/36e7d64250cd9568062f658a26b4d0107c00235cb3b85fa4919b3ba4070c9bed.jpg",
    },
    {
      title: "Record-breaking Profits",
      discription:
        "We are proud to announce that our bank has achieved record-breaking profits this year. Thanks to our dedicated team and loyal customers, we have surpassed all expectations and set new industry standards. Read more to learn about our success story.",
      imageLink:
        "https://bucket.material-tailwind.com/magic-ai/58b51625af5803baea7811b7e9128c8b23c0706c3271fa863b6bc287c2d3958a.jpg",
    },
  ];
  return (
    <section className="container mx-auto px-4 py-4 lg:py-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {data.map((details, index) => (
          <Card
            key={index}
            discription={details.discription}
            title={details.title}
            imageLink={details.imageLink}
          />
        ))}
      </div>
    </section>
  );
};

export default PostCard;
