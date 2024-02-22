export default function CarouselButton({ children, onSelect }) {
  return <button onClick={onSelect}>{children}</button>;
}
