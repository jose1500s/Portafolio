import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner'
export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_397gnko', 'template_mq4hnfh', form.current, {
            publicKey: 'HAelRkjZXjGDJgX5Q',
          })
          .then(
            () => {
                toast.success('Mensaje enviado correctamente', {
                    position: 'bottom-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                });
                form.current.reset();
            },
            (error) => {
                toast.error('Error al enviar el mensaje', {
                    position: 'bottom-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                });
                console.log(error.text);
            },
          );
      };

    return (
        <>
            <h3 className='text-4xl text-white text-center m-4'>
                Contacto
            </h3>
            <section className="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-96 mb-10 max-[740px]:w-[90%]">
                <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
                    <div className="px-6 py-6 md:px-8 md:py-0">
                        <h2 className="text-2xl font-bold text-gray-700 dark:text-white md:text-gray-100">Get in <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">Touch</span></h2>

                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">
                            Puedes enviarme un correo directamente usando el siguiente formulario.
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
                    <form ref={form} onSubmit={sendEmail}>
                        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md  dark:bg-gray-800">
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Nombre</label>
                                    <input
                                        id="username"
                                        type="text"
                                        name="user_name"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Correo</label>
                                    <input
                                        id="emailAddress"
                                        type="email"
                                        name="user_email"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>


                                <div id='textarea'>
                                    <label htmlFor="cajaMensaje" className="block text-base font-medium text-gray-700 dark:text-gray-200">Mensaje</label>

                                    <textarea
                                        id="cajaMensaje"
                                        name="message"
                                        className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-base 
                                        bg-transparent text-white p-2 
                                        "
                                        rows="4"
                                        placeholder="Ingresa tu mensaje aquí..."
                                    ></textarea>

                                </div>
                            </div>

                            <div className="flex justify-end mt-6">
                                <button
                                    className="group relative inline-flex items-center overflow-hidden rounded bg-gray-700 px-8 py-3 text-white focus:outline-none focus:ring active:bg-gray-600"
                                    type='submit'
                                >
                                    <span className="absolute -end-full transition-all group-hover:end-4">
                                        <svg
                                            className="size-5 rtl:rotate-180"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </span>

                                    <span className="text-base font-medium transition-all group-hover:me-4"> Enviar </span>
                                </button>
                            </div>
                        </section>
                    </form>
                </div>
            </section>
        </>
    );
}