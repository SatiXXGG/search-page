interface Props {
  url: string;
  icon: string;
}

export default function Page({ icon, url }: Props) {
  return (
    <a className="bg-neutral-950 border border-white/5 p-3 rounded-full" href={url}>
      <img className=" rounded-full bg-transparent w-8 h-8" src={icon}></img>
    </a>
  );
}
