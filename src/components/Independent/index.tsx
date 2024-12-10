import SectionTitle from "../Common/SectionTitle";

const Independent = () => {
  return (
    <section id="independent" className="relative z-10 py-16">
      <div className="container">
        <SectionTitle
          title=" INDEPENDENTLY OWNED AND OPERATED! No 3rd Party Vendors!"
          paragraph="This means knowing exactly who is caring for your laundry and who to call with questions or special requests! We can offer flexibility!"
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Independent;
