import { Contact, Cursor } from "@/components";

const contact = () => {
  return (
    <>
      <Cursor />
      <div style={{ paddingTop: "64px" }}>
        <div className="timeline-header">
          <h1 className={" timeline-header__title"}>Contact page</h1>
          <h3 className={" timeline-header__subtitle"}>
            Reach Out and Connect
          </h3>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default contact;
