import * as React from "react";
import { GalleryVerticalEnd } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "~/components/ui/sidebar";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaBluesky,
  FaRegEnvelope,
  FaBars,
} from "react-icons/fa6";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/">Home</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/projects">Projects</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/posts">Posts</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarMenu>
            <SidebarHeader>Elsewhere</SidebarHeader>
            <SidebarMenuItem>
              <SidebarMenuButton variant="social" asChild>
                <Link
                  href="mailto:contact@jrhizor.dev"
                  className="flex items-center gap-2"
                  target="_blank"
                >
                  <span className="text-[#e474a2]">
                    <FaRegEnvelope />
                  </span>
                  Email
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton variant="social" asChild>
                <Link
                  href="https://twitter.com/jaredrhizor"
                  className="flex items-center gap-2"
                  target="_blank"
                >
                  <span className="text-[#1DA1F2]">
                    <FaTwitter />
                  </span>
                  Twitter
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton variant="social" asChild>
                <Link
                  href="https://github.com/jrhizor"
                  className="flex items-center gap-2"
                  target="_blank"
                >
                  <span className="text-[#2b3137]">
                    <FaGithub />
                  </span>
                  GitHub
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton variant="social" asChild>
                <Link
                  href="https://www.linkedin.com/in/jrhizor"
                  className="flex items-center gap-2"
                  target="_blank"
                >
                  <span className="text-[#0077b5]">
                    <FaLinkedin />
                  </span>
                  LinkedIn
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton variant="social" asChild>
                <Link
                  href="https://bsky.app/profile/jrhizor.dev"
                  className="flex items-center gap-2"
                  target="_blank"
                >
                  <span className="text-[#0085ff]">
                    <FaBluesky />
                  </span>
                  Bluesky
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarFooter>
              <p className="text-sm leading-5">
                I'm <strong>Jared Rhizor</strong>, a maker, founder, and
                software dev.
              </p>
            </SidebarFooter>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
