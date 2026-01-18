import { useState } from "preact/hooks";
import axios from "axios";
import { useTranslations } from "../utils/translations";

// Toast styles
const toastStyles = `
  .toast-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .toast {
    padding: 12px 20px;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    animation: slideIn 0.3s ease-out;
    max-width: 300px;
  }

  .toast-success {
    background-color: #10b981;
  }

  .toast-error {
    background-color: #ef4444;
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

function ToastContainer({ toasts, onClose }) {
  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast toast-${toast.type}`}
          onClick={() => onClose(toast.id)}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}

const backgroundImg = "https://cdn.jaimedigitalstudio.com/assets/images/background.webp";

export default function Contact() {
  const t = useTranslations();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  function handleForm(e) {
    e.preventDefault();

    if (!message || !email || !name) {
      addToast(t("contact.invalid_inputs"), "error");
      return;
    }

    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post("/api/contact", {
        name: name,
        message: message,
        email: email,
        phone: phone,
      })
      .then((response) => {
        if (response.status == 200) {
          addToast(t("contact.success_message"), "success");
          setName("");
          setEmail("");
          setMessage("");
          setPhone("");
        }
      })
      .catch((error) => {
        const errorMessage = error.response?.data?.error || t("contact.error_message");
        addToast(errorMessage, "error");
      });
  }

  return (
    <>
      <style>{toastStyles}</style>
      <ToastContainer toasts={toasts} onClose={removeToast} />
      <h1
        id="contact"
        className="mb-8 font-extrabold text-center text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#d7d7d7] to-[#616161]"
      >
        {t("contact.title")}
      </h1>
      <section
        className="w-5/6 rounded-xl mx-auto bg-fit"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="sm:p-24 p-8 mx-auto mb-24">
          <div className="pb-8 text-center">
            <h1 className="text-primary sm:text-5xl text-3xl font-bold">
              {t("contact.contact_cta_title")}
            </h1>
            <h1 className="text-primary sm:text-5xl text-3xl font-bold">
              {t("contact.contact_cta_subtitle")}
            </h1>
          </div>
          <form
            id="form"
            className="xl:px-24 sm:px-0"
            action=""
            onSubmit={handleForm}
          >
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4 w-full justify-center">
              <div>
                <label className="text-primary font-semibold">
                  {t("contact.name_label")}
                  <input
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full text-black rounded-md h-10 px-2"
                    type="text"
                    name="name"
                    id="name"
                    placeholder={t("contact.name_placeholder")}
                    value={name}
                  />
                </label>
              </div>
              <div>
                <label className="text-primary font-semibold">
                  {t("contact.email_label")}
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full text-black rounded-md h-10 px-2"
                    type="email"
                    name="email"
                    id="email"
                    placeholder={t("contact.email_placeholder")}
                    value={email}
                  />
                </label>
              </div>
              <div>
                <label className="text-primary font-semibold">
                  {t("contact.phone_label")}
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-black rounded-md h-10 px-2"
                    type="tel"
                    name="phone"
                    id="phone"
                    value={phone}
                  />
                </label>
              </div>
            </div>
            <div className="py-4">
              <label className="text-primary font-semibold">
                {t("contact.message_label")}
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-black rounded-md h-28 p-2"
                  name="message"
                  id="message"
                  required
                  placeholder={t("contact.message_placeholder")}
                  value={message}
                ></textarea>
              </label>
            </div>
            <div className="text-center">
              <input
                type="submit"
                value={t("contact.send_button")}
                className="px-4 py-2 rounded-md bg-white font-bold cursor-pointer"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
