import {renderEmail, NotificationEmail} from "@creativeupaay-lib/email";

const RenderPage = () => {
  const emailHTML = renderEmail(
      <NotificationEmail
          firstName="Alex"
          notificationType="subscription"
          title="New Login Detected"
          message="We noticed a new login to your account from a device we don't recognize."
          actionText="Review Activity"
          actionLink="https://app.com/security/activity"
          details={[
              { label: "Device", value: "Chrome on Windows" },
              { label: "Location", value: "New York, USA" },
              { label: "Time", value: "Jan 15, 2025 at 2:30 PM" },
              { label: "IP Address", value: "192.168.1.1" }
          ]}
          showSecurityTips={true}
          // themeColor={"#f542dd"}
          year={2025}
          productName={"Creative Upaay"}
        />
  );
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
