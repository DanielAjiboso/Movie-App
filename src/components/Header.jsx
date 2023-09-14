import React from "react";

export default function Header(props) {
  const img_url =
    "https://s3-alpha-sig.figma.com/img/154e/382f/b7e8be84d7248b8b9812172cad1cd0c9?Expires=1695600000&Signature=OsNLaMa8CnSNnQeUuaSqQc4ItYP-nbUj0fcZVpScVICd8NzZdIEz80MJBNhEju2IQOUMxTFuDw4FavRj8rGqkBK6uLeq0vJG~Y-EPhP~LInckDsnzuQ5Y2BdrMTWOqkPaFdDAPmQXSLpWteihqFaB2f2VQGC6Za5gHu7t3hq62C0X21qB-8H7osPvHdFmh0c-B881mmDx6JQCfpUQRzNHAjMxdvS~LrFQthLfxQb29n8J4z25KNx4cSOzRDCMXJaP0gpPcPRXMYrFdz-nbt~yFJLM37b1YLKasT2gd5K2x6nxGQWVPlwAafWCDzo3TzVihPSl0FiwjfkbBREka5jUQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

  return (
    <div className="header">
      <img src={img_url} alt="Image" />
    </div>
  );
}
