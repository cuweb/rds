import { TextGroup } from './TextGroup'

export const ImageGrid = () => {
  const items = [
    {
      id: 1,
      src: 'https://picsum.photos/1600/700',
      link: 'link here',
      span: '2',
      text: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!',
      headerText: 'Ottawa Bluefest 30',
    },
    {
      id: 2,
      src: 'https://picsum.photos/1600/700',
      link: 'link here',
      headerText: 'Ottawa Tulip Festival',
    },
    {
      id: 3,
      src: 'https://picsum.photos/1600/700',
      link: 'link here',
      headerText: 'Parliament Building Tours',
    },
  ]

  return (
    <div className="bg-gradient-to-b w-full md:h-screen text-center md:text-left">
      <TextGroup />
      <div className="max-w-screen-lg flex flex-col justify-center w-full h-full">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-5 sm:px-5">
          {items.map(({ id, src, span, headerText, text }) => (
            <div key={id} className={`shadow-md relative col-span-${span}  shadow-gray-600 rounded-lg overflow-hidden`}>
              <button className="border w-3/5 rounded-md px-5 py-1 items-end bg-black hover:scale-105 text-white bg-opacity-65 border-none mx-2 absolute bottom-4 start-0">
                <h3 className="text-left font-bold">{headerText}</h3>
                <p className="text-left">{text}</p>
              </button>
              <img src={src} className={`rounded-md duration-200`} />
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
