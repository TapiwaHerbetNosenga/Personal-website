import MyLink from "../components/Link";

export default function Links() {
  return (
    <div>
      <div className="flex flex-col justify-center items-start mt-8 ml-7">
        <div
          className=" flex flex-col justify-center items-start"
          id="linklist"
        >
          <div>
            <MyLink
              title={"LinkedIn"}
              logo={"Linkedin.svg"}
              link={
                "https://www.linkedin.com/in/tapiwa-herbet-nosenga-55029528b/"
              }
            />
          </div>
          <div>
            {" "}
            <MyLink
              title={"GitHub"}
              logo={"git.svg"}
              link={"https://github.com/TapiwaHerbetNosenga"}
            />
          </div>
          <div>
            {" "}
            <MyLink
              title={"ZATech Slack"}
              logo={"slack.svg"}
              link={"https://zatech.slack.com/team/U05ALE12NGM"}
            />
          </div>
        </div>

        {/* <MyLink   title={""} logo={} link={} />  */}
      </div>
    </div>
  );
}
