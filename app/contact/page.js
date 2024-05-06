import { Contact } from "@/components";

const contact = () => {
  return (
    <div style={{ paddingTop: "64px", backgroundColor: "#1b1f25" }}>
      <div className="timeline-header">
        <h2 className={" timeline-header__title"}>Contact page</h2>
        <h3 className={" timeline-header__subtitle"}>Reach Out and Connect</h3>
      </div>
      <Contact />
    </div>
  );
};

export default contact;
