const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "50px",
}: {
  title: string;
  paragraph: string | string[];
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        {Array.isArray(paragraph) ? (
          paragraph.map((line, index) => (
            <p
              key={index}
              className="text-base !leading-relaxed text-body-color md:text-lg"
            >
              {line}
            </p>
          ))
        ) : (
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            {paragraph}
          </p>
        )}
      </div>
    </>
  );
};

export default SectionTitle;
