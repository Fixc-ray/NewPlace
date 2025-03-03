import React from "react";
import "./App.css";

const images = [
  { id: 1, src: "https://lh3.googleusercontent.com/pw/AP1GczNpksqO1X004SDyx2iRGtg7BzUc5AlqfCOn-s54JPV4fKn_jy8KfrSmimzpSWdRERuQxfmimfz8d9dZX1WPHFSW2p5C8ODFQx3gwztT3fqJG12kmgTPy6bMuS83hM6yzozGbYmhgEdHP04z-YkiFEXvZQ=w828-h552-s-no-gm?authuser=0", size: "large" },
  { id: 2, src: "https://lh3.googleusercontent.com/pw/AP1GczMN7le_hOkWA_L__tRxjlemp0kLZVaysUDBkXoAfxCzdGg-0BMv4HGum_QbgYawjMmsajXXUSogaBFb4lwzZtVI-nD5PcyFnRm2CXdjB_5u-fRQJjBJjgS3CCMPtWNolwX2M9AZm3uP5WQa9lEqP-7A_w=w828-h552-s-no-gm?authuser=0", size: "small" },
  { id: 3, src: "https://lh3.googleusercontent.com/pw/AP1GczMnA-eH-MKdNrRC4JshN2nvvM-rF-E1SofJu2Y-MgYKdVz8EDRs_H71UytiDp7B7wEGYJgMbMB6fDTKMBh-CusmZnyJ4oPVPggKVZAAul5DnyJkNPSHKqwJ0c5kcm_NhzFOlcIUzYO7kMU7yr0lD9nWRg=w828-h552-s-no-gm?authuser=0", size: "small" },
  { id: 4, src: "https://lh3.googleusercontent.com/pw/AP1GczM9dAa5rvZO5j1UGS4xWw_6-FmOS-hTaFa5xp5FGFWrTbdP_curGYcCfwpW19G1DKGfuf6CM_2Zd2_tPGuSpbeEqBk_GUMOejvFmZlfLsZxiVQC00ZFugV_aDd6s-ttJeWh_t-nzqrTBQfeSlK9qW2ZZg=w828-h552-s-no-gm?authuser=0", size: "large" },
  { id: 5, src: "https://lh3.googleusercontent.com/pw/AP1GczNGhAZ4Lv6zKpK6CmeIF0i8rUHevfHRCxxsGfPg9gNK_qhEm_GXvUmBfqkQpXpBhlorHsb41XoPh2YI8aq_V6s07ggExTDn3V2F4JkY_glPZjXZcheN7vDtukc1cGcPUvzm5NCg4TolNqMgjUHsgwt3Hg=w828-h552-s-no-gm?authuser=0", size: "small" },
  { id: 6, src: "https://lh3.googleusercontent.com/pw/AP1GczPdSgQ1PPKIo0l_Es5_seS272z7Q1u2AQ8HiR5fJzqwjmpNceIO5COlxPrD-QAsUZM8esS6H8DW3LVvMdpUO53pnIgg1eNRs7sgULDc7PBbjTHbifd8CQu_ta0ycUjTFV0Ma7fLjb2XQNrAz2ElTA_E2Q=w828-h552-s-no-gm?authuser=0", size: "small" },
  { id: 7, src: "https://lh3.googleusercontent.com/pw/AP1GczM5yi87npJBa2R-gwUpMuPTJyq0RQQB3-IGoNz5C0_pnSZ5M6FNeFY0T7qqa-MsJfyfAySjrnD9COouWgBOI92YlPmEpBidp3REeq4ZS1OjsoifbU-hrjZ5K_yTDv94MBKHmzvAKsQRZktEeYO_D8YkHw=w828-h552-s-no-gm?authuser=0", size: "large" },
  { id: 8, src: "https://lh3.googleusercontent.com/pw/AP1GczObMjfPna4kf3DH70I61mcAPxj__QM2XDTgA-HD06DLNzJ_EVXPuzTuWiZWj2kxkQEKeTjQX9Hcj56EeYV4wS6gg2QyLZcSvB9t40e7_mguPr70U-4J_W60He-BYgcXzrdpe7SQX6q_7sQALSJNaIzU5w=w828-h552-s-no-gm?authuser=0", size: "small" },
  { id: 9, src: "https://lh3.googleusercontent.com/pw/AP1GczNgUdrssbRN_QOFdvOGnIzFnvaSAAPfN4UojCgI5cWIf8S66zT2P-tG_8S_7EE37KXgCntexJynTEyOj6InCpLMbJeu-4DuvHbk-cN3O8zd1C6bL3C-bS1Z9d_mQNX81UX3CWr-5swRyvoPVh-kPmhsHA=w828-h552-s-no-gm?authuser=0", size: "small" },
  { id: 10, src: "https://lh3.googleusercontent.com/pw/AP1GczOzhWqPWr7ICjobc9EfJk-nd7vdV3vHMEy4RAyzo_6k4lz2vYoXzui4QHxuwbszwvdgI50KJYmMytTiyjtHq2QMUBFSVSR41IRRdmELPf9EXW0b6IeNhETKVp6OCe-VL444OMBFJygpm-TjKyCntH-qjQ=w828-h552-s-no-gm?authuser=0", size: "small" },
  { id: 11, src: "https://lh3.googleusercontent.com/pw/AP1GczOQc4f5b9tQ5nTRpiAH9GzTzOGOXnAdn1djRZsjP4eKPV0k3QW0IbvBNLPIBjFT1StxEtpjAnJb-IeRKk_AtlumaVPgiiPRSTXsgxdCekC9VGtMQ4peT8PbANYBnWS8532OrrHN4dllRjQR5vBfMMACDg=w828-h552-s-no-gm?authuser=0", size: "large" },
  { id: 12, src: "https://lh3.googleusercontent.com/pw/AP1GczMs-FJNRwYVQdjg75I8Jpk_zML4QH9NbnVHl5EjIDM2JriqQlIZpPmz7xpwLQguKQGAsf13i1TJXUQlXARso9mXTiNJoweIUcJb6TA4tfL6gWS8l6eZuPlaTN2fpC4SWEZjIeVa-cnu7MhvL2s30o3v-g=w828-h552-s-no-gm?authuser=0", size: "small" },
  { id: 13, src: "https://lh3.googleusercontent.com/pw/AP1GczOgvptbcv-CpZrUVOUtNwVVNhM7eh6N-uPk6-sk2a2eyD1QjmAMhGdZLq9y1MDYJkToMUx1gzdKnAbVS78AmLPMYXBxCk0Svc6XCrTxguGISBh_Y9lD-P9oDu6fl45xNktFrdnFLdZmA5_BT2MhrZ1l8w=w828-h552-s-no-gm?authuser=0", size: "small" },
  { id: 14, src: "https://lh3.googleusercontent.com/pw/AP1GczNixW4rfv1XikmoJ9f1jkkPRyvm_YzUZcw-kLRLFnvXirHweeU8e2v6ZLwsCq2B79Q4Y1PFvtRnaZ6v2YdW_-lcyK-DamlRnJmQ0q2HpXZM66jvFwrZtHZNtdbCnPI8IEHw8W7luXJFZwrmopxG3Qfqmg=w828-h552-s-no-gm?authuser=0", size: "large" },
  { id: 15, src: "https://lh3.googleusercontent.com/pw/AP1GczPBn_dkqA4LztlhkAJ54eP2e9ZZYC0-2qgR8vIYtyqd03UYZJGi_uoPL6OKIbp_Hoxl-KFJMmfVAdG3VRlJcioyGJZVF5xs6YHZNXcxRQFvu9yNJFCMf80l71slT7VBjJw_gLOAFjKS3Z0HJ0P8TY2Mpg=w828-h552-s-no-gm?authuser=0", size: "small" },
  { id: 16, src: "https://lh3.googleusercontent.com/pw/AP1GczMbaZ1QweN6h74re_fA-WBdBPlVnVkPXFErSIaGhkUSVsKfIf21Y58FvF_a8vpr5xYyr0Fm1n_mnrOwepDXPyGq2vvoT-B8cUI9nk93mY83PfldCeONA6bj_Vlm6beQtkNVFGP2m9uzbnljCST4ZP1jJw=w828-h552-s-no-gm?authuser=0", size: "small" },
  { id: 17, src: "https://lh3.googleusercontent.com/pw/AP1GczMtFZvoC-HH3qjABix6b998RSkhScKt9TTQV4K1alA1onjSiz11vrMjG2-TidUazv_aek9nRBOI5iTIZ8ZYHzvy8YnxrNBnkeFUQHQWVtV8-6drW9Gy-2eTKUtdSAqnMaqHziYvLrMxS1o7ATDSG_FuBw=w828-h552-s-no-gm?authuser=0", size: "large" },
  { id: 18, src: "https://lh3.googleusercontent.com/pw/AP1GczOQc4f5b9tQ5nTRpiAH9GzTzOGOXnAdn1djRZsjP4eKPV0k3QW0IbvBNLPIBjFT1StxEtpjAnJb-IeRKk_AtlumaVPgiiPRSTXsgxdCekC9VGtMQ4peT8PbANYBnWS8532OrrHN4dllRjQR5vBfMMACDg=w828-h552-s-no-gm?authuser=0", size: "small" },
  { id: 19, src: "https://lh3.googleusercontent.com/pw/AP1GczPQoC4nBsBSi6iR9qsTMPD4aESjNXTD5TiXqCubM_jX6c6r6WMwIRNz0hZ3iGIUqu2om8MDqjd7S5-1ORUkQhUwHpxBFVRgT8XXGB0spz25MBtgHpwQ4A6ThUOJ54bg9Ggmxx_VehXFrigPU_9IvE87MA=w828-h552-s-no-gm?authuser=0", size: "large" },
  { id: 20, src: "https://lh3.googleusercontent.com/pw/AP1GczNy6vbaxO4Y6kFk8C8YTu9Gi77n-1ElJXTUjN1YeeLSepaLuW0E-LgRW2h5DNqUQt5DQrf5oF0hHV3FHbWAe2-hAeG8C-AkqgT4WvPjHUuZ_H-WGKycQOZrwq91MFL2zOzD9Z3EGqDYE6XpW3vsabjNKg=w828-h552-s-no-gm?authuser=0", size: "small" },
  { id: 21, src: "https://lh3.googleusercontent.com/pw/AP1GczN5CF-_ryLo7F43a63byG9ORoz30gkKWjHrCV9Qg2l1G6ZeuE6aaCmWf3nbsGw1qiEm4K0j-pIQR8VBrNIC4HedCQ97ZP8mWDl6VxVY4GRfo2FsBpG36rW-4AlmgvdRsxLPlhgq9S5-SsoBlsRqlmvbPw=w828-h552-s-no-gm?authuser=0", size: "small" },
  { id: 22, src: "https://lh3.googleusercontent.com/pw/AP1GczNcfbbcsBZHlwGqE0ixLChLdchDkN3Rl5hEqAgoqe3qrattjajLePkJM1mDxBK7QCBAF2_xcdz3lvoVszpNay6ZwGsD6s0q0fK2PxGU7pEI63fBmrCfZxKJYc0459ltkAPTlth1CNMakcETeHbx7CrecQ=w828-h552-s-no-gm?authuser=0", size: "large" },
  { id: 23, src: "https://lh3.googleusercontent.com/pw/AP1GczPcpjeE7Bq58Zy228f7Ziq1xlvR2NMiWyF0sNrAKJIcj687pYPcMqVT0xpciZHNfR3Y2mLNEN472JHh1AQM37g5GRGwtIb08w81OZjitzSJ8sHkpgBIKcxkWYbww8aVE48xEKqsr8dQk9ZqrLkYwlUjxA=w828-h552-s-no-gm?authuser=0", size: "small" },
  { id: 24, src: "https://lh3.googleusercontent.com/pw/AP1GczMfntjertqcTuhhzTgdPrx554mRTc68DI8J4jIjOLkJmSY561iOrbiVHiHALcddnAKOB1CSRr-HIO4sMyr11xfbsy4fv1KRijeLPa1jUcV8Vk7mgsSXnf5oMfORkeqYAW8iQdBp8ZYNrvG9jfcBcoBvFw=w828-h552-s-no-gm?authuser=0", size: "small" },
  { id: 25, src: "https://lh3.googleusercontent.com/pw/AP1GczMKXPZKSC6qwukw70EAuASAs4i-HIfzgGPYz_aFtynslpEfhGeGCTRSMnGwm3D8ZjlRl-xRmBZqjqOnqesW1L8nTED4pAyyCI5dTgeJ9MgKcdOnMSOLRsg4ynR3cRxc0AXuJJiQK_vEHndy2cEotIJ5UQ=w828-h552-s-no-gm?authuser=0", size: "large" },
  { id: 26, src: "https://lh3.googleusercontent.com/pw/AP1GczMAksO84xQvB-RBI3P8eVduJCZJnHa9bFHzdJ0mz-20uCYZgMA8WT9EvDyerGpuub4mKsFAO8awiZukv9hYjbBlfYnYYKdpY24cuSItFWHsiRbCMLza4EaCx5Xh3fT41-YhkyenYUnavDhaIjTGZgvJqQ=w828-h552-s-no-gm?authuser=0", size: "large" },
  { id: 27, src: "https://lh3.googleusercontent.com/pw/AP1GczN1SqpClKDz9MYKAk8step6w7msVd50wr3RERKnW_aFdPEjlO8105A3JdI9aYP6cJSirFP7ulVfFnxdGAHoefaLLflsxAls3Keoh22JNZQyUWYkQROiruyN6ESdhuxkIq7c5dU0bHm-wUaKmj5aEc16fQ=w828-h552-s-no-gm?authuser=0", size: "small" },
  { id: 28, src: "https://lh3.googleusercontent.com/pw/AP1GczNKdvcx61vmDDvCGj-054kWqKcAYeaPZnXlbg2hiq87jIkd1adHw_VcBJUo50s7yy4xxzB_Fpi7RR4MwsY5btzoG5xnjTNJRu-0B_qoCGZzry_5sDWWFUIHiksk5eDXuHSL2uXtAt1VkqekQ63tW-4uew=w828-h552-s-no-gm?authuser=0", size: "small" },
];

function Socials() {
  return (
    <section className="home p-4">
      <h2 className="text-2xl font-bold mb-4">Our Socials Gallery</h2>
      <div className="home grid grid-cols-4 gap-4 auto-rows-[150px]">
        {images.map((img) => (
          <div
            key={img.id}
            className={`overflow-hidden rounded ${
              img.size === "large" ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
            }`}
          >
            <img
              src={img.src}
              alt={`social-${img.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Socials;
