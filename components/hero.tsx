"use client";

import { motion, Variants } from "motion/react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Sparkles,
  ChevronRight,
  Activity,
  Coffee,
  Bug,
  Palette,
  Terminal,
} from "lucide-react";
const logs = [
  "tail -f /var/log/brain.log",
  "cat /home/shravya/.daily_rituals",
  "tree -L 3 src/com/shravya/project/",
  "ps aux | grep agent",
  "cat ~/.config/vibes/session.yaml",
];
const slideUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};
const profiles = {
  "1": {
    name: "fullstack",
    asciiFaceDark: `
                 ┴─ ┌╓╔╓╖══
                        ░╠╠░░
                         ╙╜╜╚
                         └═╓
       ╔┴                               ╥
        ┴  ╓▀▓█████████▓▄  ╚╗           └║─
          ▓███████████████▄           ╔  ░╗
         ▐██████████████████▄      ┌   ╗ ╩╙
         ▐██▓▀▀▀▀▀▀▀█████▓▀▀▀╙      ║░  ╙
         ▓█▄▄▓███▓▓▄█████▄▄▓███▄
        ╒███▓▀▀▀▀▀▓███████▓▀▀▀▀▀╕
  ╓░    ▓█┘ ▄▄ ╜ ─▄╚████▓╝▄░└  ▄▄
  ╒└    ▓██▄▓█▄▄▄▀▀▄████╫▄▀▀▄▄▄█▌▄▓
       ╗╫█▓▓▓▓██████████╬███████▓▓▓█╕         ╕
       ▌▐▓▓▓▓▓▓▓█████████████▓▓▓▓▓▓▓▌╔        ╙
 ┌     └ ▓▓▓▓▓▓▓▓██▌▓▀▓▀▓▓██▓▓▓▓▓▓▓▓ ▐   ╗╗
  ╗       ▓▓▓▓▓▓█████▓▓▓█████▓▓▓▓▓▓╜
          ▐████▌░▄▄▄▄╠╠╠▄▄▄▄┘▀████▌
           ▀█████▄╬▀▀▀▀▀▀▀▀▄█████▀
╓            ▀▓████▓▓▓▓▓▓▓█████▀               └
  ░╒            ▀▀█████████▀▀└              ╘╔
                   ╠▀▀▀▀▀║              ╒
             ╓╖╓╕╒▄███████▄▄ ┌╗
      ─╗╖╔╟║░╫╫╨█▄▀███████▀║▓╥╫║╞╣║╗░╓─
    `,
    asciiTextDark: `
███████╗██╗   ██╗██╗     ██╗             
██╔════╝██║   ██║██║     ██║             
█████╗  ██║   ██║██║     ██║             
██╔══╝  ██║   ██║██║     ██║             
██║     ╚██████╔╝███████╗███████╗        
╚═╝      ╚═════╝ ╚══════╝╚══════╝        
                                           
███████╗████████╗ █████╗  ██████╗██╗  ██╗
██╔════╝╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝
███████╗   ██║   ███████║██║     █████╔╝ 
╚════██║   ██║   ██╔══██║██║     ██╔═██╗ 
███████║   ██║   ██║  ██║╚██████╗██║  ██╗
╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
                                           
██████╗ ███████╗██╗   ██╗                
██╔══██╗██╔════╝██║   ██║                
██║  ██║█████╗  ██║   ██║                
██║  ██║██╔══╝  ╚██╗ ██╔╝                
██████╔╝███████╗ ╚████╔╝                 
╚═════╝ ╚══════╝  ╚═══╝                  
    `,
    asciiFaceLight: `
                    ╓▄▄▄▄▄▄▄▄▄▄
                ▄█████████████████▓▄
              ▓███████▓▓██████████████▄
             ██████████████▓╫▓▓██████████▄
         ▄▓████████████████████████████████╖
        ▄█▓█████████████████████████████████▌
       ▐███████▀▀▀▀▀▀▀▀▀▀▀███▓█████████████▓██
       █████▀┴─────────────▀███████████████▓▓██▄
      ██████─────────────────▀█████████████▓▓███▄
    ╒██████▌────▐╥╥┬─────────┬▐███████▓███████████▄
   ▄███████░─▄▀▀▀▀▀▀▀█─────▓▀▀▀▀▀██████████████████▀
  █████████─▐──░░╓░░─────────░░╓░░██████████████████▄
 ▓████████▀─▄█▓▀█▀██▀▌─────╫▀████▀▀██████████████████╕
 █████████░─╨▀╓ ███▀ ▄┴───╬▌┌▐███┌╓▓▀████████████████▌
 ▐████████▌─░░─░░░░┴┴─────▌─┴┴░░░░─░░▐█████████████▌█╛
 ▓███████╫▌░░░░░░░────────┴────░░░░░░░▐█████████▓██▀╙
 ████████▓█░░░░░░░░░─║┬───┬║──░░░░░░░░█▌███████████
 ▐█████████▌░░░░░░░░──┴╨╨╜┴──░░░░░░░░╫█▓████▓█████▀
  ██████████▄┴░░░╪▄▄▄▄▄╣▄╣▄▄▄▄▄▒░░░░▐█████████████
  ███████████░────▐▀▄══════─▄▒▀────┴██████████████▄
 ▓████████████▌▄───░╙╩▒▀▀▀▀▒╙────▐▄████████████████
 ████████████████▀▄────░░░────▐▄███████████████████─
 ███████████████████▓▄┬───┬▄▓███████████████████▀└
  ▀██████████████████▐▀▀▀▀▀▐█████████▀████████▀
     ╙▀████████▓▓▌▐▌─────────▄▌▓▓▓█▓▓█████╙╙
         └╙▀▓▓▓▓▓▓▄┴▀▀▄▄▄▄▄╪▀┴▄▓▓▓▌▓▓▀╜└
               └╙╙▀▀═╨╨╨╨╨╚═─▀▀╨╙└
    `,
    asciiTextLight: `
███████╗██╗   ██╗██╗     ██╗             
██╔════╝██║   ██║██║     ██║             
█████╗  ██║   ██║██║     ██║             
██╔══╝  ██║   ██║██║     ██║             
██║     ╚██████╔╝███████╗███████╗        
╚═╝      ╚═════╝ ╚══════╝╚══════╝        
                                           
███████╗████████╗ █████╗  ██████╗██╗  ██╗
██╔════╝╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝
███████╗   ██║   ███████║██║     █████╔╝ 
╚════██║   ██║   ██╔══██║██║     ██╔═██╗ 
███████║   ██║   ██║  ██║╚██████╗██║  ██╗
╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
                                           
██████╗ ███████╗██╗   ██╗                
██╔══██╗██╔════╝██║   ██║                
██║  ██║█████╗  ██║   ██║                
██║  ██║██╔══╝  ╚██╗ ██╔╝                
██████╔╝███████╗ ╚████╔╝                 
╚═════╝ ╚══════╝  ╚═══╝                  
    `,
    data: {
      name: "Shravya",
      role: "Full Stack Developer",
      focus: "JavaScript(the one that rules both kingdoms), python",
      stack: "TypeScript, Node, React, MongoDB, Tailwind, FastAPI, Django",
      status: "TypeError: pending 88 new React libs (and counting)",
      bugs: 'console.log("still broken") in production',
      currently: "Arguing with yellow deprecation logs at 2AM",
      uptime: "Grinding since node_modules was born",
      daily: "Write component → Install 4 new packages → refactor",
      Motto: "If it ain't broke, don't fix it (But I will)",
    },
    personality: [
      "- Enjoy transforming tricky problems into elegant, reliable code — particularly once the situation gets… interesting",
      `- Commits: "feat: add feature" → "fix: fix feature" → "fix: fix of fix" → "WORKING"`,
      "- Localhost hero, Production firefighter",
    ],
    log: [
      `[03:47] INFO: Brilliant idea detected`,
      `[03:48] WARN: Requires rewriting entire codebase`,
      `[03:49] ERROR: Idea abandoned`,
    ],
  },
  "2": {
    name: "linux",
    asciiFaceDark: `
                 ┴─ ┌╓╔╓╖══
                        ░╠╠░░
                         ╙╜╜╚
                         └═╓
       ╔┴                               ╥
        ┴  ╓▀▓█████████▓▄  ╚╗           └║─
          ▓███████████████▄           ╔  ░╗
         ▐██████████████████▄      ┌   ╗ ╩╙
         ▐██▓▀▀▀▀▀▀▀█████▓▀▀▀╙      ║░  ╙
         ▓█▄▄▓███▓▓▄█████▄▄▓███▄
        ╒███▓▀▀▀▀▀▓███████▓▀▀▀▀▀╕
  ╓░    ▓█┘ ▄▄ ╜ ─▄╚████▓╝▄░└  ▄▄
  ╒└    ▓██▄▓█▄▄▄▀▀▄████╫▄▀▀▄▄▄█▌▄▓
       ╗╫█▓▓▓▓██████████╬███████▓▓▓█╕         ╕
       ▌▐▓▓▓▓▓▓▓█████████████▓▓▓▓▓▓▓▌╔        ╙
 ┌     └ ▓▓▓▓▓▓▓▓██▌▓▀▓▀▓▓██▓▓▓▓▓▓▓▓ ▐   ╗╗
  ╗       ▓▓▓▓▓▓█████▓▓▓█████▓▓▓▓▓▓╜
          ▐████▌░▄▄▄▄╠╠╠▄▄▄▄┘▀████▌
           ▀█████▄╬▀▀▀▀▀▀▀▀▄█████▀
╓            ▀▓████▓▓▓▓▓▓▓█████▀               └
  ░╒            ▀▀█████████▀▀└              ╘╔
                   ╠▀▀▀▀▀║              ╒
             ╓╖╓╕╒▄███████▄▄ ┌╗
      ─╗╖╔╟║░╫╫╨█▄▀███████▀║▓╥╫║╞╣║╗░╓─
    `,
    asciiTextDark: `
██╗     ██╗███╗   ██╗██╗   ██╗██╗  ██╗               
██║     ██║████╗  ██║██║   ██║╚██╗██╔╝               
██║     ██║██╔██╗ ██║██║   ██║ ╚███╔╝                
██║     ██║██║╚██╗██║██║   ██║ ██╔██╗                
███████╗██║██║ ╚████║╚██████╔╝██╔╝ ██╗               
╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝               
                                                       
███████╗██╗   ██╗███████╗████████████████╗███╗   ███╗
██╔════╝╚██╗ ██╔╝██╔════╝╚══██╔══╝██╔════╝████╗ ████║
███████╗ ╚████╔╝ ███████╗   ██║   █████╗  ██╔████╔██║
╚════██║  ╚██╔╝  ╚════██║   ██║   ██╔══╝  ██║╚██╔╝██║
███████║   ██║   ███████║   ██║   ███████╗██║ ╚═╝ ██║
╚══════╝   ╚═╝   ╚══════╝   ╚═╝   ╚══════╝╚═╝     ╚═╝
                                                       
██████╗ ███████╗██╗   ██╗                            
██╔══██╗██╔════╝██║   ██║                            
██║  ██║█████╗  ██║   ██║                            
██║  ██║██╔══╝  ╚██╗ ██╔╝                            
██████╔╝███████╗ ╚████╔╝                             
╚═════╝ ╚══════╝  ╚═══╝                              
    `,
    asciiFaceLight: `
                   ╓▄▄▄▄▄▄▄▄▄▄,
              ,▄█████████████████▓▄
             ▓███████▓▓██████████████▄,
            ██████████████▓╫▓▓██████████▄
        ▄▓████████████████████████████████µ
       ▄█▓█████████████████████████████████▌
      ▐███████▀▀▀▀▀▀▀▀▀▀▀███▓█████████████▓██
      █████▀┴»»»»»»»»»»»»»▀███████████████▓▓██p
    ,██████»»»»»»»»»»»»»»»»»▀█████████████▓▓███▄
   ,██████▌»»»»;LL;»»»»»»»»»;▐███████▓███████████▄
  ▄███████M»▄▀▀▀▀▀▀▀█»»»»»▓▀▀▀▀▀██████████████████▀
 █████████»"»»»░µ░»»»»»»»»»»»░╓µ░██████████████████▄
▓████████▌»▄█▓▀█▀██▀▌»»»»»╫▀████▀▀██████████████████w
█████████M»╨▀µ ███▀,▄H»»»M▌,▐███,╓▓▀████████████████▌
▐████████▌»»»»»»»»┴┴»»»»»▌»┴┴»»»»»»»▐█████████████▌█M
▓███████╫▌n░░░░»»»»»»»»»»┴»»»»»»░░░░░▐█████████▓██M╙
████████▓█░░░░░░░»»»Φ|»»»|φ»»»░░░░░░░█▌███████████
▐█████████▌%░░░░░»»»»┴╨╨╜┴»»»»░░░░░░╫█▓████▓█████M
 ██████████▄»»»»¥▄▄▄▄▄╣▄╣▄▄▄▄▄▒»»»»▐█████████████
 ███████████⌂»»»»▐▀▄¬═~═~═¬▄Φ▀»»»»:██████████████▄
▓████████████▌¿»»»»╙╩▒▀▀▀▀Å╙»»»»;▄████████████████⌐
███████████████▓▄¿»»»»»░»»»»»;▄███████████████████^
███████████████████▓▄¡»»»;▄▓███████████████████▀└
 ▀██████████████████▐▀▀▀▀▀▐█████████▀████████▀
    ╙▀████████▓▓▌▐▌»»»»»»»»»▄▌▓▓▓█▓▓█████╙╙
        "╙▀▓▓▓▓▓▓▄┴▀¥▄▄▄▄▄Φ▀┴▄▓▓▓▌▓▓▀╜"
              "╙╙▀▀═""»»»""~▀▀╨╙"
    `,
    asciiTextLight: `
██╗     ██╗███╗   ██╗██╗   ██╗██╗  ██╗               
██║     ██║████╗  ██║██║   ██║╚██╗██╔╝               
██║     ██║██╔██╗ ██║██║   ██║ ╚███╔╝                
██║     ██║██║╚██╗██║██║   ██║ ██╔██╗                
███████╗██║██║ ╚████║╚██████╔╝██╔╝ ██╗               
╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝               
                                                       
███████╗██╗   ██╗███████╗████████████████╗███╗   ███╗
██╔════╝╚██╗ ██╔╝██╔════╝╚══██╔══╝██╔════╝████╗ ████║
███████╗ ╚████╔╝ ███████╗   ██║   █████╗  ██╔████╔██║
╚════██║  ╚██╔╝  ╚════██║   ██║   ██╔══╝  ██║╚██╔╝██║
███████║   ██║   ███████║   ██║   ███████╗██║ ╚═╝ ██║
╚══════╝   ╚═╝   ╚══════╝   ╚═╝   ╚══════╝╚═╝     ╚═╝
                                                       
██████╗ ███████╗██╗   ██╗                            
██╔══██╗██╔════╝██║   ██║                            
██║  ██║█████╗  ██║   ██║                            
██║  ██║██╔══╝  ╚██╗ ██╔╝                            
██████╔╝███████╗ ╚████╔╝                             
╚═════╝ ╚══════╝  ╚═══╝                              
    `,
    data: {
      name: "Shravya",
      role: "Linux System Developer",
      focus: "Bash & shell sorcery",
      stack: "Git, Tmux, Nvim, Lua, Docker, Kubernetes",
      status: ":Terminal resident",
      bugs: "Config features",
      currently: "Chasing the one-liner that replaces 200 lines",
      uptime: "42 days uptime (no crashes)",
      daily: "Prototype → Automate → Polish → Commit",
      Motto: "Script it once, never touch again",
    },
    personality: [
      "- I craft Linux automation that conquers complexity — at my best when things go wild",
      `- Commits: "feat: add script" → "fix: conf" → "fix: confs conf" → "AUTOMATED"`,
      "- I use Arch btw. Have I mentioned I use Arch?",
    ],
    log: [
      `#!bin/bash`,
      `# 1. Check Arch news (in case something broke overnight)`,
      `# 2. Update system: yay -Syu`,
      `# 3. Fix what the update broke`,
      `# 4. Stay on Arch btw`,
    ],
  },
  "3": {
    name: "java",
    asciiFaceDark: `
                 ┴─ ┌╓╔╓╖══
                        ░╠╠░░
                         ╙╜╜╚
                         └═╓
        ╔┴                               ╥
         ┴  ╓▀▓█████████▓▄  ╚╗           └║─
           ▓███████████████▄           ╔  ░╗
          ▐██████████████████▄      ┌   ╗ ╩╙
          ▐██▓▀▀▀▀▀▀▀█████▓▀▀▀╙      ║░  ╙
          ▓█▄▄▓███▓▓▄█████▄▄▓███▄
         ╒███▓▀▀▀▀▀▓███████▓▀▀▀▀▀╕
   ╓░    ▓█┘ ▄▄ ╜ ─▄╚████▓╝▄░└  ▄▄
   ╒└    ▓██▄▓█▄▄▄▀▀▄████╫▄▀▀▄▄▄█▌▄▓
        ╗╫█▓▓▓▓██████████╬███████▓▓▓█╕         ╕
        ▌▐▓▓▓▓▓▓▓█████████████▓▓▓▓▓▓▓▌╔        ╙
  ┌     └ ▓▓▓▓▓▓▓▓██▌▓▀▓▀▓▓██▓▓▓▓▓▓▓▓ ▐   ╗╗
   ╗       ▓▓▓▓▓▓█████▓▓▓█████▓▓▓▓▓▓╜
           ▐████▌░▄▄▄▄╠╠╠▄▄▄▄┘▀████▌
            ▀█████▄╬▀▀▀▀▀▀▀▀▄█████▀
╓            ▀▓████▓▓▓▓▓▓▓█████▀               └
   ░╒            ▀▀█████████▀▀└              ╘╔
                    ╠▀▀▀▀▀║              ╒
              ╓╖╓╕╒▄███████▄▄ ┌╗
       ─╗╖╔╟║░╫╫╨█▄▀███████▀║▓╥╫║╞╣║╗░╓─
    `,
    asciiTextDark: `
     ██╗ █████╗ ██╗   ██╗ █████╗                                    
     ██║██╔══██╗██║   ██║██╔══██╗                                    
     ██║███████║██║   ██║███████║                                    
██   ██║██╔══██║╚██╗ ██╔╝██╔══██║                                    
╚█████╔╝██║  ██║ ╚████╔╝ ██║  ██║                                    
 ╚════╝ ╚═╝  ╚═╝  ╚═══╝  ╚═╝  ╚═╝                                    
                                                                      
███████╗ ██████╗ ███████╗████████╗██╗    ██╗ █████╗ ██████╗ ███████╗
██╔════╝██╔═══██╗██╔════╝╚══██╔══╝██║    ██║██╔══██╗██╔══██╗██╔════╝
███████╗██║   ██║█████╗     ██║   ██║ █╗ ██║███████║██████╔╝█████╗  
╚════██║██║   ██║██╔══╝     ██║   ██║███╗██║██╔══██║██╔══██╗██╔══╝  
███████║╚██████╔╝██║        ██║   ╚███╔███╔╝██║  ██║██║  ██║███████╗
╚══════╝ ╚═════╝ ╚═╝        ╚═╝    ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
                                                                      
███████╗███╗   ██╗ ██████╗                                           
██╔════╝████╗  ██║██╔════╝                                           
█████╗  ██╔██╗ ██║██║  ███╗                                          
██╔══╝  ██║╚██╗██║██║   ██║                                          
███████╗██║ ╚████║╚██████╔╝                                          
╚══════╝╚═╝  ╚═══╝ ╚═════╝                                           
    `,
    asciiFaceLight: `
                   ╓▄▄▄▄▄▄▄▄▄▄,
              ,▄█████████████████▓▄
             ▓███████▓▓██████████████▄,
            ██████████████▓╫▓▓██████████▄
        ▄▓████████████████████████████████µ
       ▄█▓█████████████████████████████████▌
      ▐███████▀▀▀▀▀▀▀▀▀▀▀███▓█████████████▓██
      █████▀┴»»»»»»»»»»»»»▀███████████████▓▓██p
    ,██████»»»»»»»»»»»»»»»»»▀█████████████▓▓███▄
   ,██████▌»»»»;LL;»»»»»»»»»;▐███████▓███████████▄
  ▄███████M»▄▀▀▀▀▀▀▀█»»»»»▓▀▀▀▀▀██████████████████▀
 █████████»"»»»░µ░»»»»»»»»»»»░╓µ░██████████████████▄
▓████████▌»▄█▓▀█▀██▀▌»»»»»╫▀████▀▀██████████████████w
█████████M»╨▀µ ███▀,▄H»»»M▌,▐███,╓▓▀████████████████▌
▐████████▌»»»»»»»»┴┴»»»»»▌»┴┴»»»»»»»▐█████████████▌█M
▓███████╫▌n░░░░»»»»»»»»»»┴»»»»»»░░░░░▐█████████▓██M╙
████████▓█░░░░░░░»»»Φ|»»»|φ»»»░░░░░░░█▌███████████
▐█████████▌%░░░░░»»»»┴╨╨╜┴»»»»░░░░░░╫█▓████▓█████M
 ██████████▄»»»»¥▄▄▄▄▄╣▄╣▄▄▄▄▄▒»»»»▐█████████████
 ███████████⌂»»»»▐▀▄¬═~═~═¬▄Φ▀»»»»:██████████████▄
▓████████████▌¿»»»»╙╩▒▀▀▀▀Å╙»»»»;▄████████████████⌐
███████████████▓▄¿»»»»»░»»»»»;▄███████████████████^
███████████████████▓▄¡»»»;▄▓███████████████████▀└
 ▀██████████████████▐▀▀▀▀▀▐█████████▀████████▀
    ╙▀████████▓▓▌▐▌»»»»»»»»»▄▌▓▓▓█▓▓█████╙╙
        "╙▀▓▓▓▓▓▓▄┴▀¥▄▄▄▄▄Φ▀┴▄▓▓▓▌▓▓▀╜"
              "╙╙▀▀═""»»»""~▀▀╨╙"
    `,
    asciiTextLight: `
     ██╗ █████╗ ██╗   ██╗ █████╗                                    
     ██║██╔══██╗██║   ██║██╔══██╗                                    
     ██║███████║██║   ██║███████║                                    
██   ██║██╔══██║╚██╗ ██╔╝██╔══██║                                    
╚█████╔╝██║  ██║ ╚████╔╝ ██║  ██║                                    
 ╚════╝ ╚═╝  ╚═╝  ╚═══╝  ╚═╝  ╚═╝                                    
                                                                      
███████╗ ██████╗ ███████╗████████╗██╗    ██╗ █████╗ ██████╗ ███████╗
██╔════╝██╔═══██╗██╔════╝╚══██╔══╝██║    ██║██╔══██╗██╔══██╗██╔════╝
███████╗██║   ██║█████╗     ██║   ██║ █╗ ██║███████║██████╔╝█████╗  
╚════██║██║   ██║██╔══╝     ██║   ██║███╗██║██╔══██║██╔══██╗██╔══╝  
███████║╚██████╔╝██║        ██║   ╚███╔███╔╝██║  ██║██║  ██║███████╗
╚══════╝ ╚═════╝ ╚═╝        ╚═╝    ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
                                                                      
███████╗███╗   ██╗ ██████╗                                           
██╔════╝████╗  ██║██╔════╝                                           
█████╗  ██╔██╗ ██║██║  ███╗                                          
██╔══╝  ██║╚██╗██║██║   ██║                                          
███████╗██║ ╚████║╚██████╔╝                                          
╚══════╝╚═╝  ╚═══╝ ╚═════╝                                           
    `,
    data: {
      name: "Shravya",
      role: "Java Software Engineer",
      focus: "Java (the enterprise survival kit)",
      stack: "Spring Boot, Maven/Gradle, mySQL, JPA/hibernate, IntelliJ, mySQL",
      status: "JVM warmed up, soul still cold",
      bugs: "Checked exceptions everywhere",
      currently: "Fighting legacy XML configs",
      uptime: "Running since Java 8 (trauma included)",
      daily: "Write 3 classes → Refactor 30",
      Motto: "It compiles → Therefore it works (right?)",
    },
    personality: [
      "- I build solid Java backends that just work — and keep working even after the third layer of abstraction",
      `- Commits: "feat: abstraction" → "refactor: refactor" → "refactor: deeper" → "refactor: extreme" → "COMPLILES"`,
      "- Strong typing. Strong coffee. Strong opinions",
    ],
    log: [
      `src/com/shravya/project/
  ├── AbstractBaseFactoryManagerProvider.java
  ├── SingletonProxyBeanFactoryConfigurationBuilder.java
  ├── EnterpriseBusinessLogicServiceImpl.java
  ├── GenericRepositoryDaoHelperUtility.java
  └── TheActualCodeThatDoesStuff.java`,
    ],
  },
  "4": {
    name: "ai",
    asciiFaceDark: `
                 ┴─ ┌╓╔╓╖══
                        ░╠╠░░
                         ╙╜╜╚
                         └═╓
        ╔┴                               ╥
         ┴  ╓▀▓█████████▓▄  ╚╗           └║─
           ▓███████████████▄           ╔  ░╗
          ▐██████████████████▄      ┌   ╗ ╩╙
          ▐██▓▀▀▀▀▀▀▀█████▓▀▀▀╙      ║░  ╙
          ▓█▄▄▓███▓▓▄█████▄▄▓███▄
         ╒███▓▀▀▀▀▀▓███████▓▀▀▀▀▀╕
   ╓░    ▓█┘ ▄▄ ╜ ─▄╚████▓╝▄░└  ▄▄
   ╒└    ▓██▄▓█▄▄▄▀▀▄████╫▄▀▀▄▄▄█▌▄▓
        ╗╫█▓▓▓▓██████████╬███████▓▓▓█╕         ╕
        ▌▐▓▓▓▓▓▓▓█████████████▓▓▓▓▓▓▓▌╔        ╙
  ┌     └ ▓▓▓▓▓▓▓▓██▌▓▀▓▀▓▓██▓▓▓▓▓▓▓▓ ▐   ╗╗
   ╗       ▓▓▓▓▓▓█████▓▓▓█████▓▓▓▓▓▓╜
           ▐████▌░▄▄▄▄╠╠╠▄▄▄▄┘▀████▌
            ▀█████▄╬▀▀▀▀▀▀▀▀▄█████▀
╓            ▀▓████▓▓▓▓▓▓▓█████▀               └
   ░╒            ▀▀█████████▀▀└              ╘╔
                    ╠▀▀▀▀▀║              ╒
              ╓╖╓╕╒▄███████▄▄ ┌╗
       ─╗╖╔╟║░╫╫╨█▄▀███████▀║▓╥╫║╞╣║╗░╓─
    `,
    asciiTextDark: `
 █████╗ ██████╗ ██████╗ ██╗     ██╗███████╗██████╗     
██╔══██╗██╔══██╗██╔══██╗██║     ██║██╔════╝██╔══██╗    
███████║██████╔╝██████╔╝██║     ██║█████╗  ██║  ██║    
██╔══██║██╔═══╝ ██╔═══╝ ██║     ██║██╔══╝  ██║  ██║    
██║  ██║██║     ██║     ███████╗██║███████╗██████╔╝    
╚═╝  ╚═╝╚═╝     ╚═╝     ╚══════╝╚═╝╚══════╝╚═════╝     
                                                         
 █████╗ ██╗                                            
██╔══██╗██║                                            
███████║██║                                            
██╔══██║██║                                            
██║  ██║██║                                            
╚═╝  ╚═╝╚═╝                                            
                                                         
███████╗███╗   ██╗ ██████╗                              
██╔════╝████╗  ██║██╔════╝                              
█████╗  ██╔██╗ ██║██║  ███╗                            
██╔══╝  ██║╚██╗██║██║   ██║                            
███████╗██║ ╚████║╚██████╔╝                            
╚══════╝╚═╝  ╚═══╝ ╚═════╝                              
    `,
    asciiFaceLight: `
                   ╓▄▄▄▄▄▄▄▄▄▄,
              ,▄█████████████████▓▄
             ▓███████▓▓██████████████▄,
            ██████████████▓╫▓▓██████████▄
        ▄▓████████████████████████████████µ
       ▄█▓█████████████████████████████████▌
      ▐███████▀▀▀▀▀▀▀▀▀▀▀███▓█████████████▓██
      █████▀┴»»»»»»»»»»»»»▀███████████████▓▓██p
    ,██████»»»»»»»»»»»»»»»»»▀█████████████▓▓███▄
   ,██████▌»»»»;LL;»»»»»»»»»;▐███████▓███████████▄
  ▄███████M»▄▀▀▀▀▀▀▀█»»»»»▓▀▀▀▀▀██████████████████▀
 █████████»"»»»░µ░»»»»»»»»»»»░╓µ░██████████████████▄
▓████████▌»▄█▓▀█▀██▀▌»»»»»╫▀████▀▀██████████████████w
█████████M»╨▀µ ███▀,▄H»»»M▌,▐███,╓▓▀████████████████▌
▐████████▌»»»»»»»»┴┴»»»»»▌»┴┴»»»»»»»▐█████████████▌█M
▓███████╫▌n░░░░»»»»»»»»»»┴»»»»»»░░░░░▐█████████▓██M╙
████████▓█░░░░░░░»»»Φ|»»»|φ»»»░░░░░░░█▌███████████
▐█████████▌%░░░░░»»»»┴╨╨╜┴»»»»░░░░░░╫█▓████▓█████M
 ██████████▄»»»»¥▄▄▄▄▄╣▄╣▄▄▄▄▄▒»»»»▐█████████████
 ███████████⌂»»»»▐▀▄¬═~═~═¬▄Φ▀»»»»:██████████████▄
▓████████████▌¿»»»»╙╩▒▀▀▀▀Å╙»»»»;▄████████████████⌐
███████████████▓▄¿»»»»»░»»»»»;▄███████████████████^
███████████████████▓▄¡»»»;▄▓███████████████████▀└
 ▀██████████████████▐▀▀▀▀▀▐█████████▀████████▀
    ╙▀████████▓▓▌▐▌»»»»»»»»»▄▌▓▓▓█▓▓█████╙╙
        "╙▀▓▓▓▓▓▓▄┴▀¥▄▄▄▄▄Φ▀┴▄▓▓▓▌▓▓▀╜"
              "╙╙▀▀═""»»»""~▀▀╨╙"
    `,
    asciiTextLight: `
 █████╗ ██████╗ ██████╗ ██╗     ██╗███████╗██████╗     
██╔══██╗██╔══██╗██╔══██╗██║     ██║██╔════╝██╔══██╗    
███████║██████╔╝██████╔╝██║     ██║█████╗  ██║  ██║    
██╔══██║██╔═══╝ ██╔═══╝ ██║     ██║██╔══╝  ██║  ██║    
██║  ██║██║     ██║     ███████╗██║███████╗██████╔╝    
╚═╝  ╚═╝╚═╝     ╚═╝     ╚══════╝╚═╝╚══════╝╚═════╝     
                                                         
 █████╗ ██╗                                            
██╔══██╗██║                                            
███████║██║                                            
██╔══██║██║                                            
██║  ██║██║                                            
╚═╝  ╚═╝╚═╝                                            
                                                         
███████╗███╗   ██╗ ██████╗                              
██╔════╝████╗  ██║██╔════╝                              
█████╗  ██╔██╗ ██║██║  ███╗                            
██╔══╝  ██║╚██╗██║██║   ██║                            
███████╗██║ ╚████║╚██████╔╝                            
╚══════╝╚═╝  ╚═══╝ ╚═════╝                              
    `,
    data: {
      name: "Shravya",
      role: "Applied AI Engineer",
      focus: "Python(Teaching LLMs to behave)",
      stack: "LangChain, VectorDB, FastAPI, Ollama, RAG, MCP",
      status: "Rate limits are suggestions, not boundaries",
      bugs: `"High confidence" hallucination detected`,
      currently: "Fighting context pollution and losing",
      uptime: `Since gpt-3 first said "Hello World"`,
      daily: "Prompt → Add context → MCP → Pollution → Rerank",
      Motto: "Just add RAG (solves 83% of problems)",
    },
    personality: [
      "- I engineer reliable AI agents that get things done — especially when they start getting a little too independent",
      `- Commits: "feat: pipelines" → "chore: added MCP" → "feat: added context" → "revert: removed context" → "WORKS"`,
      "- AI agent builder, Not model trainer, Definitely not vibe coder",
    ],
    log: [
      `shravya   2847  85.3  12.4  python agent_orchestrator.py --state=thinking`,
      `shravya   2848  45.7   8.1  python tool_selector.py --confidence=low`,
      `shravya   2849  92.1  15.2  python reasoning_loop.py --stuck=true`,
      `shravya   2850   3.2   2.1  python token_counter.py --cost=rising`,
    ],
  },
  "5": {
    name: "vibe",
    asciiFaceDark: `
                 ┴─ ┌╓╔╓╖══
                        ░╠╠░░
                         ╙╜╜╚
                         └═╓
        ╔┴                               ╥
         ┴  ╓▀▓█████████▓▄  ╚╗           └║─
           ▓███████████████▄           ╔  ░╗
          ▐██████████████████▄      ┌   ╗ ╩╙
          ▐██▓▀▀▀▀▀▀▀█████▓▀▀▀╙      ║░  ╙
          ▓█▄▄▓███▓▓▄█████▄▄▓███▄
         ╒███▓▀▀▀▀▀▓███████▓▀▀▀▀▀╕
   ╓░    ▓█┘ ▄▄ ╜ ─▄╚████▓╝▄░└  ▄▄
   ╒└    ▓██▄▓█▄▄▄▀▀▄████╫▄▀▀▄▄▄█▌▄▓
        ╗╫█▓▓▓▓██████████╬███████▓▓▓█╕         ╕
        ▌▐▓▓▓▓▓▓▓█████████████▓▓▓▓▓▓▓▌╔        ╙
  ┌     └ ▓▓▓▓▓▓▓▓██▌▓▀▓▀▓▓██▓▓▓▓▓▓▓▓ ▐   ╗╗
   ╗       ▓▓▓▓▓▓█████▓▓▓█████▓▓▓▓▓▓╜
           ▐████▌░▄▄▄▄╠╠╠▄▄▄▄┘▀████▌
            ▀█████▄╬▀▀▀▀▀▀▀▀▄█████▀
╓            ▀▓████▓▓▓▓▓▓▓█████▀               └
   ░╒            ▀▀█████████▀▀└              ╘╔
                    ╠▀▀▀▀▀║              ╒
              ╓╖╓╕╒▄███████▄▄ ┌╗
       ─╗╖╔╟║░╫╫╨█▄▀███████▀║▓╥╫║╞╣║╗░╓─
    `,
    asciiTextDark: `
██╗   ██╗██╗██████╗ ███████╗             
██║   ██║██║██╔══██╗██╔════╝             
██║   ██║██║██████╔╝█████╗               
╚██╗ ██╔╝██║██╔══██╗██╔══╝               
 ╚████╔╝ ██║██████╔╝███████╗             
  ╚═══╝  ╚═╝╚═════╝ ╚══════╝             
                                           
 ██████╗ ██████╗ ██████╗ ███████╗██████╗ 
██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔══██╗
██║     ██║   ██║██║  ██║█████╗  ██████╔╝
██║     ██║   ██║██║  ██║██╔══╝  ██╔══██╗
╚██████╗╚██████╔╝██████╔╝███████╗██║  ██║
 ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝
    `,
    asciiFaceLight: `
                   ╓▄▄▄▄▄▄▄▄▄▄,
              ,▄█████████████████▓▄
             ▓███████▓▓██████████████▄,
            ██████████████▓╫▓▓██████████▄
        ▄▓████████████████████████████████µ
       ▄█▓█████████████████████████████████▌
      ▐███████▀▀▀▀▀▀▀▀▀▀▀███▓█████████████▓██
      █████▀┴»»»»»»»»»»»»»▀███████████████▓▓██p
    ,██████»»»»»»»»»»»»»»»»»▀█████████████▓▓███▄
   ,██████▌»»»»;LL;»»»»»»»»»;▐███████▓███████████▄
  ▄███████M»▄▀▀▀▀▀▀▀█»»»»»▓▀▀▀▀▀██████████████████▀
 █████████»"»»»░µ░»»»»»»»»»»»░╓µ░██████████████████▄
▓████████▌»▄█▓▀█▀██▀▌»»»»»╫▀████▀▀██████████████████w
█████████M»╨▀µ ███▀,▄H»»»M▌,▐███,╓▓▀████████████████▌
▐████████▌»»»»»»»»┴┴»»»»»▌»┴┴»»»»»»»▐█████████████▌█M
▓███████╫▌n░░░░»»»»»»»»»»┴»»»»»»░░░░░▐█████████▓██M╙
████████▓█░░░░░░░»»»Φ|»»»|φ»»»░░░░░░░█▌███████████
▐█████████▌%░░░░░»»»»┴╨╨╜┴»»»»░░░░░░╫█▓████▓█████M
 ██████████▄»»»»¥▄▄▄▄▄╣▄╣▄▄▄▄▄▒»»»»▐█████████████
 ███████████⌂»»»»▐▀▄¬═~═~═¬▄Φ▀»»»»:██████████████▄
▓████████████▌¿»»»»╙╩▒▀▀▀▀Å╙»»»»;▄████████████████⌐
███████████████▓▄¿»»»»»░»»»»»;▄███████████████████^
███████████████████▓▄¡»»»;▄▓███████████████████▀└
 ▀██████████████████▐▀▀▀▀▀▐█████████▀████████▀
    ╙▀████████▓▓▌▐▌»»»»»»»»»▄▌▓▓▓█▓▓█████╙╙
        "╙▀▓▓▓▓▓▓▄┴▀¥▄▄▄▄▄Φ▀┴▄▓▓▓▌▓▓▀╜"
              "╙╙▀▀═""»»»""~▀▀╨╙"
    `,
    asciiTextLight: `
██╗   ██╗██╗██████╗ ███████╗             
██║   ██║██║██╔══██╗██╔════╝             
██║   ██║██║██████╔╝█████╗               
╚██╗ ██╔╝██║██╔══██╗██╔══╝               
 ╚████╔╝ ██║██████╔╝███████╗             
  ╚═══╝  ╚═╝╚═════╝ ╚══════╝             
                                           
 ██████╗ ██████╗ ██████╗ ███████╗██████╗ 
██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔══██╗
██║     ██║   ██║██║  ██║█████╗  ██████╔╝
██║     ██║   ██║██║  ██║██╔══╝  ██╔══██╗
╚██████╗╚██████╔╝██████╔╝███████╗██║  ██║
 ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝
    `,
    asciiLight: `
                   ╓▄▄▄▄▄▄▄▄▄▄,
              ,▄█████████████████▓▄
             ▓███████▓▓██████████████▄,
            ██████████████▓╫▓▓██████████▄
        ▄▓████████████████████████████████µ
       ▄█▓█████████████████████████████████▌
      ▐███████▀▀▀▀▀▀▀▀▀▀▀███▓█████████████▓██
      █████▀┴»»»»»»»»»»»»»▀███████████████▓▓██p
    ,██████»»»»»»»»»»»»»»»»»▀█████████████▓▓███▄
   ,██████▌»»»»;LL;»»»»»»»»»;▐███████▓███████████▄
  ▄███████M»▄▀▀▀▀▀▀▀█»»»»»▓▀▀▀▀▀██████████████████▀
 █████████»"»»»░µ░»»»»»»»»»»»░╓µ░██████████████████▄
▓████████▌»▄█▓▀█▀██▀▌»»»»»╫▀████▀▀██████████████████w
█████████M»╨▀µ ███▀,▄H»»»M▌,▐███,╓▓▀████████████████▌
▐████████▌»»»»»»»»┴┴»»»»»▌»┴┴»»»»»»»▐█████████████▌█M
▓███████╫▌n░░░░»»»»»»»»»»┴»»»»»»░░░░░▐█████████▓██M╙
████████▓█░░░░░░░»»»Φ|»»»|φ»»»░░░░░░░█▌███████████
▐█████████▌%░░░░░»»»»┴╨╨╜┴»»»»░░░░░░╫█▓████▓█████M
 ██████████▄»»»»¥▄▄▄▄▄╣▄╣▄▄▄▄▄▒»»»»▐█████████████
 ███████████⌂»»»»▐▀▄¬═~═~═¬▄Φ▀»»»»:██████████████▄
▓████████████▌¿»»»»╙╩▒▀▀▀▀Å╙»»»»;▄████████████████⌐
███████████████▓▄¿»»»»»░»»»»»;▄███████████████████^
███████████████████▓▄¡»»»;▄▓███████████████████▀└
 ▀██████████████████▐▀▀▀▀▀▐█████████▀████████▀
    ╙▀████████▓▓▌▐▌»»»»»»»»»▄▌▓▓▓█▓▓█████╙╙
        "╙▀▓▓▓▓▓▓▄┴▀¥▄▄▄▄▄Φ▀┴▄▓▓▓▌▓▓▀╜"
              "╙╙▀▀═""»»»""~▀▀╨╙"
     
    
██╗   ██╗██╗██████╗ ███████╗             
██║   ██║██║██╔══██╗██╔════╝             
██║   ██║██║██████╔╝█████╗               
╚██╗ ██╔╝██║██╔══██╗██╔══╝               
 ╚████╔╝ ██║██████╔╝███████╗             
  ╚═══╝  ╚═╝╚═════╝ ╚══════╝             
                                          
 ██████╗ ██████╗ ██████╗ ███████╗██████╗ 
██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔══██╗
██║     ██║   ██║██║  ██║█████╗  ██████╔╝
██║     ██║   ██║██║  ██║██╔══╝  ██╔══██╗
╚██████╗╚██████╔╝██████╔╝███████╗██║  ██║
 ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝
                                          
    `,
    data: {
      name: "Shravya",
      role: "Vibe Coder",
      focus: "Momentum > Perfection",
      stack:
        "ChatGPT, Copilot, cloude, opencode, ctrl+c, ctrl+v, vibes, prayers",
      status: "GENERATING... (please stand by)",
      bugs: "AI said it was fine",
      currently: "Boot up 30 agents, confirm always allow",
      uptime: "Depends on my token limit",
      daily: "Prompt → Stare → Regret → New Model",
      Motto: "See no code, Quantity > Quality",
    },
    personality: [
      "- I chain prompts and agents into systems that outpace thought. maximum AURA. Zero friction",
      `- Commits: "vibe initial" → "800 unchecked lines" → "mega aura" → "aura overload" → "WE ARE SOOOO BACK"`,
      "- 100x developer (LLM workers did the heavy lifting)",
    ],
    log: [
      `aesthetic: lofi-music`,
      `motivation: 6/10 (acceptable)`,
      `timezone: whenever inspiration strikes`,
    ],
  },
};

const profileIps = {
  "1": "NJ, USA (404: turn signal not found)",
  "2": "NJ, USA (latency so low even my ping misses me)",
  "3": "NJ, USA (where static IPs still experience congestion)",
  "4": "NJ, USA (my tokens still load faster than NYC traffic)",
  "5": "NJ, USA (floating in the cloud)",
} as const;

const moduleData = {
  stats: {
    name: "sysinfo",
    content: [
      { label: "CPU", value: "Overclocked anxiety", color: "terminal-red" },
      { label: "RAM", value: "Full of browser tabs", color: "terminal-orange" },
      { label: "GPU", value: "Rendering tears", color: "terminal-yellow" },
      { label: "Disk", value: "99% node_modules", color: "terminal-green" },
      { label: "Temp", value: "Running hot (like me)", color: "terminal-cyan" },
    ],
  },
  coffee: {
    name: "caffeine",
    content: [
      { label: "Level", value: "CRITICAL", color: "terminal-red" },
      {
        label: "Cups Today",
        value: "[▓▓▓▓▓▓▓▓▓▓░░░░]",
        color: "terminal-orange",
      },
      { label: "Heart Rate", value: "Probably fine", color: "terminal-yellow" },
      { label: "Sleep", value: "What's that?", color: "terminal-green" },
      { label: "Mood", value: "JITTERY", color: "terminal-cyan" },
    ],
  },
  bugs: {
    name: "issues",
    content: [
      {
        label: "Production",
        value: "0 (shipped yesterday)",
        color: "terminal-green",
      },
      { label: "Local", value: "Works perfectly", color: "terminal-blue" },
      { label: "Features", value: "All bugs", color: "terminal-purple" },
      { label: "Fixed", value: "Created 5 new ones", color: "terminal-red" },
      {
        label: "Status",
        value: "It's not a bug, it's a feature",
        color: "terminal-orange",
      },
    ],
  },
  rice: {
    name: "hypr",
    content: [
      {
        label: "Theme",
        value: "Changed 47 times today",
        color: "terminal-red",
      },
      { label: "Dots", value: "Backed up never", color: "terminal-orange" },
      {
        label: "Anime",
        value: "Waifu wallpaper: active",
        color: "terminal-yellow",
      },
      {
        label: "Opacity",
        value: "Blind but aesthetic",
        color: "terminal-green",
      },
      {
        label: "Status",
        value: "Breaking configs since 2020",
        color: "terminal-cyan",
      },
    ],
  },
  arch: {
    name: "archbtw",
    content: [
      {
        label: "Distro",
        value: "Arch Linux",
        color: "terminal-green",
      },
      { label: "Kernel", value: "linux-zen", color: "terminal-green" },
      {
        label: "WM",
        value: "Hyprland",
        color: "terminal-green",
      },
      {
        label: "Editor",
        value: "Neovim (btw)",
        color: "terminal-green",
      },
      {
        label: "Status",
        value: "I use Arch, btw",
        color: "terminal-green",
      },
    ],
  },
};

const waybarItems = [
  { id: "stats", icon: Activity, tooltip: "System Info" },
  { id: "coffee", icon: Coffee, tooltip: "Coffee Status" },
  { id: "bugs", icon: Bug, tooltip: "Bug Counter" },
  { id: "rice", icon: Palette, tooltip: "Rice Status" },
  {
    id: "arch",
    icon: Terminal,
    tooltip: "arch(BTW)",
    highlight: "terminal-green",
  },
];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [activeProfile, setActiveProfile] = useState<string>("1");
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentProfile = profiles[activeProfile as keyof typeof profiles];
  const currentModuleData = activeModule
    ? moduleData[activeModule as keyof typeof moduleData]
    : null;
  const moduleItems = currentModuleData
    ? activeModule === "stats"
      ? [
          ...currentModuleData.content,
          {
            label: "IP",
            value: profileIps[activeProfile as keyof typeof profileIps],
            color: "terminal-purple",
          },
        ]
      : currentModuleData.content
    : [];
  const logCommand =
    logs[Number.parseInt(activeProfile, 10) - 1] ?? logs[0] ?? "";

  // Default to dark theme during SSR/hydration to prevent mismatches
  const isDark = resolvedTheme === "dark" || !resolvedTheme;

  const currentAsciiFace = isDark
    ? currentProfile.asciiFaceDark
    : currentProfile.asciiFaceLight;

  const currentAsciiText = isDark
    ? currentProfile.asciiTextDark
    : currentProfile.asciiTextLight;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container-responsive max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] w-full pt-8">
        {/* MAIN TERMINAL CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden terminal-container"
        >
          {/* Inner glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 dark:from-violet-500/10 dark:via-fuchsia-500/10 dark:to-violet-500/10 rounded-2xl blur-xl -z-10 opacity-70 dark:opacity-50" />

          {/* WAYBAR - TOP BAR */}
          <div className="flex items-center justify-between px-4 py-2 terminal-waybar">
            {/* Left - Profile Selectors (Workspaces) */}
            <div className="flex items-center gap-1">
              {["1", "2", "3", "4", "5"].map((num) => (
                <motion.button
                  key={num}
                  onClick={() => {
                    setActiveProfile(num);
                    setActiveModule(null);
                  }}
                  whileHover={{ backgroundColor: "rgba(139, 92, 246, 0.15)" }}
                  className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
                    activeProfile === num
                      ? "bg-violet-500/20 text-violet-700 dark:text-violet-300 border border-violet-500/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-violet-500/10"
                  }`}
                >
                  {num}
                </motion.button>
              ))}
            </div>

            {/* Center - Window Title */}
            <div className="hidden md:block text-xs font-mono text-muted-foreground">
              {activeModule
                ? `shravya --module ${currentModuleData?.name}`
                : `shravya --profile -${currentProfile.name}`}
            </div>

            {/* Right - Module Icons */}
            <div className="flex items-center gap-1">
              {waybarItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() =>
                    setActiveModule(activeModule === item.id ? null : item.id)
                  }
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  whileHover={{ backgroundColor: "rgba(139, 92, 246, 0.15)" }}
                  className={`relative group p-2 rounded transition-all ${
                    activeModule === item.id
                      ? item.highlight
                        ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                        : "bg-violet-500/20 text-violet-700 dark:text-violet-300 border border-violet-500/30"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <item.icon className="w-4 h-4" strokeWidth={1.5} />
                  {/* Tooltip */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-card border border-border rounded text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg">
                    {item.tooltip}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* TERMINAL CONTENT */}
          <div className="p-8 md:p-12">
            <motion.div
              key={`${activeProfile}-${activeModule}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Module Content or Profile Content */}
              {activeModule && currentModuleData ? (
                /* Module View */
                <div className="mb-8">
                  <div className="flex items-center gap-2 font-mono text-sm mb-4">
                    <span className="terminal-green">➜</span>
                    <span className="terminal-blue">~</span>
                    <span className="text-foreground">
                      {currentModuleData.name}
                    </span>
                  </div>
                  <div className="pl-6 font-mono text-sm">
                    {moduleItems.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="grid grid-cols-[120px_auto_1fr] gap-3 mb-2 items-baseline"
                      >
                        <span className={`font-bold ${item.color}`}>
                          {item.label}
                        </span>
                        <span className="text-foreground">→</span>
                        <span className="text-muted-foreground">
                          {item.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                /* Profile View */
                <>
                  <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-16">
                    {/* ASCII Art */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1, type: "spring" }}
                      className="flex flex-col md:block gap-4"
                    >
                      {/* Mobile: Face on left, Text on right */}
                      <div className="flex flex-row gap-4 md:hidden items-start">
                        <pre
                          suppressHydrationWarning
                          className="ascii-art text-[4px] leading-tight text-transparent bg-clip-text bg-gradient-to-br from-violet-400 via-fuchsia-400 to-purple-400 select-none flex-shrink-0"
                        >
                          {currentAsciiFace}
                        </pre>
                        <pre
                          suppressHydrationWarning
                          className="ascii-art text-[5px] leading-tight text-transparent bg-clip-text bg-gradient-to-br from-violet-400 via-fuchsia-400 to-purple-400 select-none"
                        >
                          {currentAsciiText}
                        </pre>
                      </div>
                      {/* Desktop: Face on top, Text below */}
                      <pre
                        suppressHydrationWarning
                        className="hidden md:block ascii-art text-[7px] md:text-[9px] leading-tight text-transparent bg-clip-text bg-gradient-to-br from-violet-400 via-fuchsia-400 to-purple-400 select-none mb-4"
                      >
                        {currentAsciiFace}
                      </pre>
                      <pre
                        suppressHydrationWarning
                        className="hidden md:block ascii-art text-[7px] md:text-[9px] leading-tight text-transparent bg-clip-text bg-gradient-to-br from-violet-400 via-fuchsia-400 to-purple-400 select-none"
                      >
                        {currentAsciiText}
                      </pre>
                    </motion.div>

                    {/* System Info */}
                    <div className="space-y-2 font-mono text-sm md:text-base">
                      {Object.entries(currentProfile.data).map(
                        ([key, value], idx) => {
                          const colors = [
                            "terminal-red",
                            "terminal-orange",
                            "terminal-yellow",
                            "terminal-green",
                            "terminal-cyan",
                            "terminal-blue",
                            "terminal-purple",
                            "terminal-pink",
                          ];
                          const color = colors[idx % colors.length];
                          const isMotto = key.toLowerCase() === "motto";
                          return (
                            <div key={key}>
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + idx * 0.05 }}
                                className="grid grid-cols-[120px_auto_1fr] gap-3 items-baseline"
                              >
                                <span className={`${color} font-bold`}>
                                  {key.charAt(0).toUpperCase() + key.slice(1)}
                                </span>
                                <span className="text-foreground">→</span>
                                <span className="text-muted-foreground">
                                  {value as string}
                                </span>
                              </motion.div>
                              {isMotto && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.1 + (idx + 1) * 0.05 }}
                                  className="flex flex-wrap gap-1 mt-6"
                                >
                                  <div className="w-6 h-4 rounded bg-[#c53b53] dark:bg-[#f7768e]" />
                                  <div className="w-6 h-4 rounded bg-[#d06d47] dark:bg-[#ff9e64]" />
                                  <div className="w-6 h-4 rounded bg-[#b3873e] dark:bg-[#e0af68]" />
                                  <div className="w-6 h-4 rounded bg-[#587936] dark:bg-[#9ece6a]" />
                                  <div className="w-6 h-4 rounded bg-[#2a7a6f] dark:bg-[#73daca]" />
                                  <div className="w-6 h-4 rounded bg-[#3d59a1] dark:bg-[#7aa2f7]" />
                                  <div className="w-6 h-4 rounded bg-[#7e6bab] dark:bg-[#bb9af7]" />
                                  <div className="w-6 h-4 rounded bg-[#9d6080] dark:bg-[#f7768e]" />
                                </motion.div>
                              )}
                            </div>
                          );
                        },
                      )}
                    </div>
                  </div>

                  {/* Command Output */}
                  <div className="mt-8 pt-8 border-t border-border/50">
                    <div className="flex items-center gap-2 font-mono text-sm mb-4">
                      <span className="terminal-green">➜</span>
                      <span className="terminal-blue">~</span>
                      <span className="text-foreground">
                        cat personality.md
                      </span>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="pl-6 font-mono text-sm text-muted-foreground space-y-2"
                    >
                      {currentProfile.personality.map((line, idx) => (
                        <motion.p
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + idx * 0.1 }}
                        >
                          {line}
                        </motion.p>
                      ))}
                    </motion.div>
                  </div>

                  {/* Logs Output */}
                  <div className="mt-8 pt-8 border-t border-border/50">
                    <div className="flex items-center gap-2 font-mono text-sm mb-4">
                      <span className="terminal-green">➜</span>
                      <span className="terminal-blue">~</span>
                      <span className="text-foreground">{logCommand}</span>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="pl-6 font-mono text-sm text-muted-foreground space-y-2"
                    >
                      {currentProfile.log.map((line, idx) => (
                        <motion.pre
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + idx * 0.1 }}
                          className="whitespace-pre-wrap"
                        >
                          {line}
                        </motion.pre>
                      ))}
                    </motion.div>
                  </div>
                </>
              )}
            </motion.div>

            {/* Current Prompt */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-2 mt-8 font-mono text-sm"
            >
              <span className="terminal-green">➜</span>
              <span className="terminal-blue">~</span>
              {mounted && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    times: [0, 0.5, 1],
                  }}
                  className="w-2.5 h-5 bg-violet-500"
                />
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.05,
              transition: {
                type: "spring" as const,
                stiffness: 400,
                damping: 10,
              },
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-medium overflow-hidden"
          >
            <Sparkles className="w-5 h-5" />
            <span>View Projects</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              transition: {
                type: "spring" as const,
                stiffness: 400,
                damping: 10,
              },
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass hover:bg-white/10 font-medium transition-colors border border-violet-500/20"
          >
            <span>Contact Info</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
