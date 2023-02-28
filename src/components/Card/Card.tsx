type CardProps = {
  title: string
  content: string
}

export const Card = ({ title, content }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-red-700 text-base">{content}</p>
      </div>
    </div>
  )
}

Card.displayName = 'Card'
