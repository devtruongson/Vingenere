'use client';

import { useState } from 'react';

const lowercaseCharacters: string[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    ' ',
    '~',
    '`',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '-',
    '_',
    '+',
    '=',
    '|',
    '\\',
    '"',
    '\n',
    '\t',
    '{',
    '[',
    ']',
    '}',
    ':',
    ';',
    "'",
    '<',
    ',',
    '.',
    '>',
    '?',
    '/',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'ă',
    'â',
    'đ',
    'ê',
    'ô',
    'ơ',
    'ư',
    'á',
    'à',
    'ả',
    'ã',
    'ạ',
    'ắ',
    'ằ',
    'ẳ',
    'ẵ',
    'ặ',
    'ấ',
    'ầ',
    'ẩ',
    'ẫ',
    'ậ',
    'é',
    'è',
    'ẻ',
    'ẽ',
    'ẹ',
    'ế',
    'ề',
    'ể',
    'ễ',
    'ệ',
    'í',
    'ì',
    'ỉ',
    'ĩ',
    'ị',
    'ó',
    'ò',
    'ỏ',
    'õ',
    'ọ',
    'ố',
    'ồ',
    'ổ',
    'ỗ',
    'ộ',
    'ớ',
    'ờ',
    'ở',
    'ỡ',
    'ợ',
    'ú',
    'ù',
    'ủ',
    'ũ',
    'ụ',
    'ứ',
    'ừ',
    'ử',
    'ữ',
    'ự',
    'ý',
    'ỳ',
    'ỷ',
    'ỹ',
    'ỵ',
    'Ă',
    'Â',
    'Đ',
    'Ê',
    'Ô',
    'Ơ',
    'Ư',
    'Á',
    'À',
    'Ả',
    'Ã',
    'Ạ',
    'Ắ',
    'Ằ',
    'Ẳ',
    'Ẵ',
    'Ặ',
    'Ấ',
    'Ầ',
    'Ẩ',
    'Ẫ',
    'Ậ',
    'É',
    'È',
    'Ẻ',
    'Ẽ',
    'Ẹ',
    'Ế',
    'Ề',
    'Ể',
    'Ễ',
    'Ệ',
    'Í',
    'Ì',
    'Ỉ',
    'Ĩ',
    'Ị',
    'Ó',
    'Ò',
    'Ỏ',
    'Õ',
    'Ọ',
    'Ố',
    'Ồ',
    'Ổ',
    'Ỗ',
    'Ộ',
    'Ớ',
    'Ờ',
    'Ở',
    'Ỡ',
    'Ợ',
    'Ú',
    'Ù',
    'Ủ',
    'Ũ',
    'Ụ',
    'Ứ',
    'Ừ',
    'Ử',
    'Ữ',
    'Ự',
    'Ý',
    'Ỳ',
    'Ỷ',
    'Ỹ',
    'Ỵ',
];

export default function Home() {
    const [plainText, setPlainText] = useState<string>('');
    const [cipherText, setCipherText] = useState<string>('');
    const [key, setKey] = useState<string>('');
    const [tableMatrix, setTableMatrix] = useState<{ arrayOne: string[]; arrayTwo: string[] }>({
        arrayOne: [],
        arrayTwo: [],
    });

    const handleTableMatrix = (isEncode: boolean = false): number[] => {
        setKey(key.trim());
        setPlainText(plainText.trim());
        setCipherText(cipherText.trim());
        setTableMatrix({
            arrayOne: [],
            arrayTwo: [],
        });

        if (isEncode && (!key || !plainText)) {
            alert('Hãy nhập đầy đủ key và plaintext');
            return [];
        }

        if (!isEncode && (!key || !cipherText)) {
            alert('Hãy nhập đầy đủ key và cipherText');
            return [];
        }

        if (isEncode) {
            for (let i = 0; i < plainText.length; i++) {
                const letterText = plainText.charAt(i);
                const indexStringLettter = lowercaseCharacters.indexOf(letterText);
                if (indexStringLettter !== null && indexStringLettter >= 0) {
                    tableMatrix.arrayOne.push(String(indexStringLettter));
                }
            }
        } else {
            for (let i = 0; i < cipherText.length; i++) {
                const letterText = cipherText.charAt(i);
                const indexStringLettter = lowercaseCharacters.indexOf(letterText);
                if (indexStringLettter !== null && indexStringLettter >= 0) {
                    tableMatrix.arrayOne.push(String(indexStringLettter));
                }
            }
        }

        const arrayKeyNumber: number[] = [];
        for (let i = 0; i < key.length; i++) {
            const letterTextKey = key.charAt(i);
            const indexStringLettterKey = lowercaseCharacters.indexOf(letterTextKey);

            if (indexStringLettterKey !== null && indexStringLettterKey >= 0) {
                arrayKeyNumber.push(indexStringLettterKey);
            }
        }
        setTableMatrix((prev) => ({ ...prev, arrayOne: tableMatrix.arrayOne }));
        return arrayKeyNumber;
    };

    const handleClickEndCode = () => {
        tableMatrix.arrayOne = [];
        tableMatrix.arrayTwo = [];

        // lấy ra mảng number key
        const arrayKeyNumber = handleTableMatrix(true);

        let index = 0;
        for (let i = 0; i < tableMatrix.arrayOne.length; i++) {
            if (index == arrayKeyNumber.length) {
                index = 0;
            }
            tableMatrix.arrayTwo.push(String(arrayKeyNumber[index]));
            index++;
        }

        setTableMatrix((prev) => ({ ...prev, arrayTwo: tableMatrix.arrayTwo }));
        let cipherTextString = '';
        tableMatrix.arrayOne.forEach((item, index: number) => {
            const indexCipherText = (Number(item) + Number(tableMatrix.arrayTwo[index])) % lowercaseCharacters.length;
            cipherTextString += lowercaseCharacters[indexCipherText];
        });
        setCipherText(cipherTextString);
    };

    const handleDecode = () => {
        tableMatrix.arrayOne = [];
        tableMatrix.arrayTwo = [];

        const arrayKeyNumber = handleTableMatrix(false);

        let index = 0;
        for (let i = 0; i < tableMatrix.arrayOne.length; i++) {
            if (index == arrayKeyNumber.length) {
                index = 0;
            }
            tableMatrix.arrayTwo.push(String(arrayKeyNumber[index]));
            index++;
        }

        setTableMatrix((prev) => ({ ...prev, arrayTwo: tableMatrix.arrayTwo }));
        let platinTextString = '';
        tableMatrix.arrayOne.forEach((item, index: number) => {
            let indexCipherText = (Number(item) - Number(tableMatrix.arrayTwo[index])) % lowercaseCharacters.length;
            if (indexCipherText < 0) {
                indexCipherText = lowercaseCharacters.length + indexCipherText;
            }
            platinTextString += lowercaseCharacters[indexCipherText];
        });
        setPlainText(platinTextString);
    };

    return (
        <div className="container mx-auto py-5">
            <h1 className="font-bold text-[30px]">Vigenere - Nguyễn Trường Sơn</h1>
            <div className="mt-10">
                <label htmlFor="plainText" className="block text-sm font-medium text-gray-900 mb-2">
                    Chuỗi PlainText
                </label>
                <input
                    value={plainText}
                    onChange={(e) => setPlainText(e.target.value)}
                    type="text"
                    id="plainText"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Nhập plain text...."
                    required
                />
            </div>
            <div className="mt-3">
                <label htmlFor="key" className="block text-sm font-medium text-gray-900 mb-2">
                    Key
                </label>
                <input
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    type="text"
                    id="key"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Nhập key...."
                    required
                />
            </div>
            <div className="mt-3">
                <label htmlFor="result" className="block text-sm font-medium text-gray-900 mb-2">
                    CipherText
                </label>
                <input
                    value={cipherText}
                    onChange={(e) => setCipherText(e.target.value)}
                    type="text"
                    id="result"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
            </div>
            <div className="flex gap-4">
                <div className="mt-5">
                    <button
                        onClick={handleClickEndCode}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Mã Hóa
                    </button>
                </div>
                <div className="mt-5">
                    <button
                        onClick={handleDecode}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Giải mã
                    </button>
                </div>
            </div>

            {plainText && cipherText && (
                <div className="relative overflow-x-auto rounded-md">
                    <table className="border-collapse w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Tên task
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Giá trị
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    PlainText
                                </th>
                                <td className="px-6 py-4">{tableMatrix.arrayOne.join(',')}</td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    CipherText
                                </th>
                                <td className="px-6 py-4">{tableMatrix.arrayTwo.join(',')}</td>
                            </tr>
                        </tbody>
                        <caption className="text-center">
                            <strong>Quá trình thực thi logic</strong>
                        </caption>
                    </table>
                </div>
            )}
        </div>
    );
}
