import type { Config } from "tailwindcss"

const config = {

  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2', 
        '2/1': '2 / 1',
        '5/4': '5 / 4',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ['inter', 'sans-serif'], // or any other font
      },
      fontSize: {
        "12px": "12px",
      },
      lineHeight: {
        'extra': '4rem',
      },
      colors: {
        primary: "#063312",
        "paginationColor" : "#377dff",
        "liteGray" : "#e9e2e0",
        "grayPartition" :"#CED4DA",
        "eventPrimary": "#f2db26",
        "eventGray" : "#AAAAAA",
        "eventParagraph" : "#05070B",
        "lmsCourseText" : "#60666D",
        "moduleCourseCountFirst" : "#FFEDA7",
        "moduleCourseFontColorFirst" : "#A48A23",
        "moduleCourseCountSecond" : "#FFABAC",
        "moduleCourseFontColorSecond" : "#8C4243",
        "moduleCourseCountThird" : "#C06BF9",
        "moduleCourseFontColorThird" : "#431B5E",
        "lmsModuleBgColor" :"#454545",
        "lmsReAssignBtn": "#ADB5BD",
        "great": "#38761d",
        "attention":"#cc0100",
        "guidance" : "#ffe599",
        "improvement" : "#b7d7a8",
        grayColor: "#60666D",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderColor:{
        grayColor: "#E9E9E9"
      },
      inset:{

        '10vh': '10vh',
        '20vh': '20vh',
        '30vh' : '30vh',
        '50vh': '50vh',
        '70vh' : '70vh',
        '100vw' : '100vw',
        '85vw' : '85vw',
        '15vw' :'15vw',
        '20vw' : '20vw',
        '10vw' : '10vw'

      },
      boxShadow:{

        "event-detail" : "rgba(0, 0, 0, 0.08) 0px 4px 12px",
        "drop-down" : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        "event-registered" : "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        "LMS-admin-course" : "0px 0px 5px 0px rgba(140,149,159,0.2)",
        "LMS-admin-course-mid" : "0px 0px 5px 0px rgba(140,149,159,0.2)",
        "LMS-admin-course-down" : "0px 0px 5px 0px rgba(140,149,159,0.2)",
        "questionsInLMS" : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        "staffEvelShodow" :"0px 0px 10px 0px rgba(140,149,159,0.2)",
        "questionsShodow" :"0px 0px 10px 0px rgba(140,149,159,0.2)",
        "outletCards" : "0px 0px 10px 0px rgba(140,149,159,0.2)"
      },

      borderWidth:{
           '1': '1px', 
           'custom-xl': '32px',
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      width:{
        "80%" : "80%",
         "90%" : "90%",
         "70%" : "70%"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

} satisfies Config

export default config