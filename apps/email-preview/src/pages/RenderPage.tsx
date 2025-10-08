import { renderEmail, WelcomeEmail } from "@creativeupaay-lib/email";

const RenderPage = () => {
  const emailHTML = renderEmail(<WelcomeEmail firstName="Naidu" theme={"primary"} />);
  return (
    <div>
      <iframe
        style={{ width: "100%", height: "100vh", border: "1px solid #ccc" }}
        srcDoc={emailHTML}
      />
    </div>
  );
};

export default RenderPage;
