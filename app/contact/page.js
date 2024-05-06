import { Contact } from "@/components";

const contact = () => {
  return (
    <div style={{ paddingTop: "64px", backgroundColor: "#161616" }}>
      <div className="timeline-header">
        <h1 className={" timeline-header__title"}>Contact page</h1>
        <h3 className={" timeline-header__subtitle"}>Reach Out and Connect</h3>
      </div>
      <Contact />
    </div>
  );
};

export default contact;
