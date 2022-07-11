import Head from "next/head";

export default function Home() {

    const formInput = [
        {
            label: "Nama Lengkap : ",
            type: "text",
            name: "FullName",
            placeholder: "Silahkan masukkan nama Lengkap anda !",
            category: "inputText"
        },
        {
            label: "Tempat Lahir : ",
            type: "text",
            name: "bornPlace",
            category: "inputText"
        },
        {
            label: "Tanggal Lahir : ",
            type: "date",
            name: "bornDate",
            category: "inputText"
        },
        {
            label: "Jenis Kelamin : ",
            category: "dropdown",
            data: [
                {
                    value: "Laki - Laki"
                },
                {
                    value: "Perempuan"
                }
            ],
            name: "gender"
        },
        {
            label: "No Hp/Wa : ",
            type: "text",
            name: "phoneNumber",
            category: "inputText"
        },
        {
            label: "Tinggi Badan : ",
            type: "text",
            maxLength: 3,
            name: "bodyHeight",
            category: "inputText"
        },
        {
            label: "Berat Badan : ",
            type: "text",
            maxLength: 3,
            name: "bodyWeight",
            category: "inputText"
        },
        {
            label: "Usia : ",
            type: "text",
            maxLength: 2,
            name: "age",
            category: "inputText"
        },
        {
            label: "Pendidikan Terakhir : ",
            type: "text",
            name: "lastEducation",
            category: "inputText"
        },
        {
            label: "Asal Sekolah : ",
            type: "text",
            name: "schoolOrigin",
            category: "inputText"
        },
        {
            label: "Jurusan : ",
            type: "text",
            name: "major",
            category: "inputText"
        },
        {
            label: "Alamat : ",
            type: "text",
            name: "address",
            category: "inputText"
        },
        {
            label: "Bukti Transfer",
            type: "file",
            name: "image",
            category: "uploadPhoto"
        },
    ];

    const setFormRender = (value) => {
        switch (value.category) {
            case "dropdown":
                return (
                    <select className="max-w-md h-9 rounded-lg left-1.5 border">
                        {
                            value.data.map((item, index) => {
                                return <option value={item.value} key={index} >
                                    {item.value}
                                </option>
                            })
                        }
                    </select>
                );
            case "inputText":
                switch (value.name) {
                    case "address":
                        return <textarea />
                    default :
                        return (
                            <input type={value.type} maxLength={value.maxLength} placeholder={value.placeholder} className="max-w-md h-9 rounded-lg left-1.5 border"/>
                        )
                }
            case "uploadPhoto":
                return (
                    <button>
                        <input type={value.type} />
                    </button>
                )
        }
    }

  return (
    <div className="bg-[url('/background.jpeg')] bg-no-repeat bg-cover bg-center bg-fixed">
        <Head>
            <title>SMK Muhammadiyah Salaman</title>
            <link rel='icon' href='/smkmu.ico' />
        </Head>

        <main className="p-32 backdrop-brightness-50 h-screen w-screen">
            <div className="max-w-full min-h-full bg-sky-50 rounded-lg border-double flex">
                <div className="min-h-fit min-w-max p-16 flex items-center">
                    <img src="/logosmk.png" alt="Logo Sekolah" className="w-80" />
                </div>
                <div className="flex flex-col items-center w-screen p-16 flex flex-col items-center">
                    <h1 className="text-center font-sans text-xl font-bold text-green-500">Selamat Datang di E - Form <br/> BKK SMK Muhammadiyah Salaman Kabupaten Magelang</h1>
                    <div className="w-full h-full border-l-2 border-black grid grid-cols-3 pt-9 pl-20 pb-9 overflow-y-auto">
                        {
                            formInput.map((value, index) => {
                                return (
                                    <div className="flex flex-col max-w-xs h-16 justify-around">
                                        <label>{value.label}</label>
                                        {setFormRender(value)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </main>
    </div>
  );
}
