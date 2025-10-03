import { renderEmail, WelcomeEmail } from "@creativeupaay-lib/email";

const RenderPage = () => {
  const emailHTML = renderEmail(<WelcomeEmail name="ronak" />);
  return (
    <div>
      <iframe
        style={{ width: "100%", height: "500px", border: "1px solid #ccc" }}
        srcDoc={emailHTML}
      />
    </div>
  );
};

export default RenderPage;
