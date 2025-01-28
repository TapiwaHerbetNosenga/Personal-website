const MyLink = ({logo, link, title}) => {
  return (
    <div>
        <a href={link} target="_blank">
        <div class="linker" className="flex flex-row justify-items-start items-center">
        <img src={logo}/>
        <p className="text-black">{title}</p>
      </div>
        </a>
    </div>
  );
};

export default MyLink;