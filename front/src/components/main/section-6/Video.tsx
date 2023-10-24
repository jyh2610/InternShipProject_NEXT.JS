"use client";

import Text from "./Text";

import NoticeButton from "./NoticeButton";
import "./style.css";

function Video() {
  return (
    <div className="relative">
      <div className="w-full md:w-[1600px] mx-auto">
        <div className="video-layout w-full h-full" style={{}}>
          <video autoPlay muted>
            <source
              src="https://rr3---sn-o097znsd.c.drive.google.com/videoplayback?expire=1698147363&ei=8oE3ZZHJPPPIp84PpdOt4Ac&ip=106.240.186.214&id=d4d1da31a9c48b07&itag=22&source=webdrive&requiressl=yes&xpc=EghotM6WJ3oBAQ==&mh=sT&mm=32&mn=sn-o097znsd&ms=su&mv=m&mvi=3&pl=17&ttl=transient&susc=dr&driveid=1m75lIxlqP6Zicycd5GgAfLTi2rjE_0vd&app=explorer&eaua=tB3NOpFH-aw&mime=video/mp4&vprv=1&prv=1&dur=148.886&lmt=1698134838679317&mt=1698136362&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AGM4YrMwRAIgBgrCVFBqPyMvmBc-plUR4vAAvxW7zenpHYqGr1xKvngCIFwG10qdxpcK4PXfSS6zjnXk0Dl-r1a7NdvP2T9gnoPx&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AK1ks_kwRgIhANyWPbGQGR_XDPyhiZCquELPRBIXZkUWU4-hICYDFYUBAiEAnv7LZdrBVXvJ0cMXcNrf1GM5c_arh4upotkUSagd9rw=&cpn=LURbT4Re7VjxKPQZ&c=WEB_EMBEDDED_PLAYER&cver=1.20231015.00.00"
              type="video/mp4"
            />
          </video>
        </div>
        <div
          className="absolute text-center left-[50%] top-[50%]"
          style={{
            transform: "translate(-50%, -50%)",
            width: "100%",
            maxWidth: "1600px",
          }}
        >
          <Text />
          <NoticeButton />
        </div>
      </div>
    </div>
  );
}
export default Video;
