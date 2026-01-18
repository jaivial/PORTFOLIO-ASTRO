import Toast from "./Toast.jsx";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useTranslations } from "../utils/translations";

const backgroundImg = "https://cdn.jaimedigitalstudio.com/assets/images/background.webp";
export default function Contact() {
  const t = useTranslations();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [isToast, setisToast] = useState(false);
  
  function Check() {
    if (!message || !email || !name) {
      toast.error(t("contact.invalid_inputs"), {
        style: { backgroundColor: "#303030", color: "#fff" },
      });
    }
  }
  function handleForm(e) {
    e.preventDefault();

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
          toast.success(t("contact.success_message"), {
            style: { backgroundColor: "#303030", color: "#fff" },
          });
          // Clear form
          setName("");
          setEmail("");
          setMessage("");
          setPhone("");
        }
      })
      .catch((error) => {
        const errorMessage = error.response?.data?.error || t("contact.error_message");
        toast.error(errorMessage, {
          style: { backgroundColor: "#303030", color: "#fff" },
        });
      });
  }
  return (
    <>
      <div>
        <Toaster />
      </div>
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
                  />
                </label>
              </div>
              <div>
                <label className="text-primary font-semibold">
                  {t("contact.phone_label")}
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full text-black rounded-md h-10 px-2"
                    type="number"
                    name="phone"
                    id="phone"
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
                ></textarea>
              </label>
            </div>
            <div className="text-center">
              <input
                onClick={Check}
                type="submit"
                value={t("contact.send_button")}
                className="px-4 py-2 rounded-md bg-white font-bold"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
