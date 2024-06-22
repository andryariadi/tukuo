import Image from "next/image";

const Reviews = ({ reviews }: { reviews: any }) => {
  return (
    <div className="flex flex-col gap-5 font-sans border-t-2 border-n-1/10 py-2">
      <h1 className="font-medium">User Reviews</h1>
      {reviews.data.map((review: any) => (
        <div key={review.id} className="flex flex-col gap-4 font-sans text-xs text-n-3">
          {/* User */}
          <div className="flex items-center gap-4 font-medium">
            <Image src={review.customer.avatar_url} alt={review.customer.display_name} width={32} height={32} className="rounded-full" />
            <span>{review.customer.display_name}</span>
          </div>
          {/* Start */}
          <div className="flex items-center gap-2">
            {Array.from({ length: review.rating }).map((_, index) => (
              <Image key={index} src="/star.png" alt="Star" width={16} height={16} />
            ))}
          </div>
          {/* Desc */}
          {review.heading && <p>{review.heading}</p>}
          {review.body && <p>{review.body}</p>}
          <div>
            {review.media.map((media: any) => (
              <Image key={media.id} src={media.url} alt={media.subject} width={80} height={50} className="object-cover" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
