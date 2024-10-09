import { useState, useEffect } from 'react';
import Button from '../../components/button';
import types from '../../data/types.json';

interface ITheme {
  theme: string;
}

interface IType {
  type: string;
  themes: Array<ITheme>;
  maxTotal: number;
}

export default function MainChoosing() {
  const [type, setType] = useState<IType>();
  const [theme, setTheme] = useState<ITheme>();
  const [totalBox, setTotalBox] = useState<number>(0);
  const [message, setMessage] = useState<string>('');
  const [urlEncodedMsg, setUrlEncodedMsg] = useState<string>('');

  useEffect(() => {
    if (type && theme) {
      setMessage(`Hallo kak,

Saya ingin booking hantaran dengan rincian sebagai berikut.
        
Tipe: ${type?.type ?? ''}
Tema: ${theme?.theme ?? ''}
Total Hantaran: ${totalBox ?? ''}
        
Tambahan:
(Silakan tulis request mu di sini)
      `);
    }
  }, [type, theme, totalBox]);

  useEffect(() => {
    setUrlEncodedMsg(encodeURI(message));
  }, [message]);

  return (
    <section
      id="main-choosing"
      className="flex items-start justify-center h-screen p-4"
    >
      <div className="flex flex-col items-start justify-center rounded-xl bg-pink-200 p-2 mt-8 w-full lg:w-1/2">
        <div id="type-choosing" className="flex flex-col items-start w-full">
          <h3 className="mt-1">Pilih tipe hantaran</h3>
          <div className="flex items-center justify-start w-full">
            {types.map(it => (
              <Button
                key={`${it.type}`}
                id={`btn-choosing-${it.type}`}
                additionalClassNames={['mr-2']}
                bgColor={type?.type === it.type ? 'bg-pink-600' : undefined}
                onClick={() => {
                  setType(it);
                  setTotalBox(it.maxTotal);
                  setTheme(undefined);
                }}
              >
                {it.type}
              </Button>
            ))}
          </div>
          {type && (
            <>
              <h3 className="mt-5">Pilih tema hantaran</h3>
              <div className="flex items-center justify-start w-full">
                {type?.themes.map(it => (
                  <Button
                    key={`${it.theme}`}
                    id={`btn-choosing-${it.theme}`}
                    additionalClassNames={['mr-2']}
                    bgColor={
                      theme?.theme === it.theme ? 'bg-pink-600' : undefined
                    }
                    onClick={() => {
                      setTheme(it);
                    }}
                  >
                    {it.theme}
                  </Button>
                ))}
              </div>
            </>
          )}

          {type && theme && (
            <>
              <h3>Total hantaran</h3>
              <div className="flex items-center justify-center rounded-lg bg-white">
                <span className="p-3 text-lg font-bold">{totalBox}</span>
                <div className="flex flex-col items-center justify-center">
                  <div
                    className="p-1 bg-pink-600 rounded-tr-lg cursor-pointer origin-center active:scale-95 transition-transform"
                    onClick={() => {
                      if (totalBox < type.maxTotal) {
                        setTotalBox(oldVal => oldVal + 1);
                      }
                    }}
                  >
                    <svg
                      height="18"
                      width="18"
                      fill="#ffffff"
                      xmlns="http://www.w3.org/2000/svg"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      viewBox="0 0 512 299.283"
                    >
                      <path d="M75.334 286.691c-64.764 36.929-96.186-15.595-60.203-51.975L215.997 25.104c33.472-33.472 46.534-33.472 80.006 0l200.866 209.612c35.983 36.38 4.561 88.904-60.203 51.975L256 189.339 75.334 286.691z" />
                    </svg>
                  </div>
                  <div
                    className="p-1 bg-pink-600 rounded-br-lg cursor-pointer origin-center active:scale-95 transition-transform"
                    onClick={() => {
                      if (totalBox > 3) {
                        setTotalBox(oldVal => oldVal - 1);
                      }
                    }}
                  >
                    <svg
                      height="18"
                      width="18"
                      fill="#ffffff"
                      xmlns="http://www.w3.org/2000/svg"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      viewBox="0 0 512 299.283"
                    >
                      <path d="M75.334 12.591C10.57-24.337-20.852 28.186 15.131 64.566l200.866 209.613c33.472 33.471 46.534 33.471 80.006 0L496.869 64.566c35.983-36.38 4.561-88.903-60.203-51.975L256 109.944 75.334 12.591z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3>Pesan</h3>
              <textarea
                className="p-2 w-full resize-none rounded-lg"
                rows={7}
                onChange={e => setMessage(e.target.value)}
                value={message}
              />
              <a href={`https://wa.me/+6289670428545?text=${urlEncodedMsg}`}>
                <Button
                  id="btn-send-req"
                  bgColor="bg-pink-600"
                  additionalClassNames={['mt-5']}
                >
                  Send request{' '}
                  <svg
                    id="Layer_1"
                    fill="#FFFFFF"
                    height="24"
                    width="24"
                    className="ml-2"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 122.56 122.88"
                  >
                    <defs>
                      <style>.cls-1{'fill-rule:evenodd;'}</style>
                    </defs>
                    <title>send</title>
                    <path
                      className="cls-1"
                      d="M2.33,44.58,117.33.37a3.63,3.63,0,0,1,5,4.56l-44,115.61h0a3.63,3.63,0,0,1-6.67.28L53.93,84.14,89.12,33.77,38.85,68.86,2.06,51.24a3.63,3.63,0,0,1,.27-6.66Z"
                    />
                  </svg>
                </Button>
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
