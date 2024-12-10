import SectionTitle from "../Common/SectionTitle";

const Guarantee = () => {
  return (
    <section id="guarantee" className="relative z-10 py-16">
      <div className="container">
        <SectionTitle
          title="Fresh and Clean Guarantee"
          paragraph="We strive to make sure every aspect of your laundry order is done to perfection. If you are not completely satisfied with the quality of your order, we will meet with you to see what we can do to exceed your expectations."
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

export default Guarantee;
