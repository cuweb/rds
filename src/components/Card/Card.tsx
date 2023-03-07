type CardProps = {
  title: string
  content: string
}

export const Card = ({ title, content }: CardProps) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="px-6 py-4">
        <h2 className="mb-2 text-xl font-bold">{title}</h2>
        <p className="text-base text-red-700">{content}</p>
      </div>
    </div>
  )
}

Card.displayName = 'Card'
