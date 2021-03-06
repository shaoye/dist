#include <linux/kernel.h>
#include <linux/module.h>
#include <linux/netfilter.h>
#include <linux/netfilter_ipv4.h>
#include <linux/skbuff.h>
#include <linux/tcp.h>
#include <linux/icmp.h>
#include <linux/ip.h>


 
static struct nf_hook_ops nfho_out;  //net filter for outgoing packets
static struct nf_hook_ops nfho_in;   //net filter for incoming packets
struct sk_buff *sock_buff;

struct iphdr *ip_header;            //ip header struct
struct tcphdr *tcp_header;          //tcp header struct
struct icmphdr *icmp_header;          //icmp header struct

unsigned int src_port, dst_port;

unsigned int hook_func_in(unsigned int hooknum, struct sk_buff *skb, const struct net_device *in, const struct net_device *out, int (*okfn)(struct sk_buff *))
{

        sock_buff = skb;
 
        ip_header = (struct iphdr *)skb_network_header(sock_buff);    //grab network header using accessor

        if(!sock_buff) 
        { 
           return NF_ACCEPT;
        }
        printk(KERN_INFO "\n incoming packet...\n");

        //tcp packets
        if(ip_header->protocol == 6)
        {
           tcp_header = (struct tcphdr *)((__u32 *)ip_header + ip_header->ihl);  //grab transport header    
           src_port = (unsigned int) ntohs(tcp_header->source);
           dst_port = (unsigned int) ntohs(tcp_header->dest);

           // RULE_1 Block all incoming telnet traffic
           //telnet incoming
           if(dst_port == 23)
           { 
             printk(KERN_INFO "got tcp telnet packet coming\n");       
             printk(KERN_INFO "from :...%d.%d.%d.%d \n",
                              ip_header->saddr & 0x000000ff,
                              (ip_header->saddr & 0x0000ff00) >> 8,
                              (ip_header->saddr & 0x00ff0000) >> 16,
                              (ip_header->saddr & 0xff000000) >> 24);
             printk(KERN_INFO "To :...%d.%d.%d.%d \n",
                              ip_header->daddr & 0x000000ff,
                              (ip_header->daddr & 0x0000ff00) >> 8,
                              (ip_header->daddr & 0x00ff0000) >> 16,
                              (ip_header->daddr & 0xff000000) >> 24);

             printk(KERN_INFO "source port no...%d\n destinatio port no...%d\n", src_port, dst_port);   
             printk(KERN_INFO "dropping tcp telnet request packet\n"); 
             return NF_DROP;
           }
        }

        return NF_ACCEPT;
}
//end of for incoming packets

//for outgoing packets
unsigned int hook_func_out(unsigned int hooknum, struct sk_buff *skb, const struct net_device *in, const struct net_device *out, int (*okfn)(struct sk_buff *))
{

  sock_buff = skb;
  ip_header = (struct iphdr *)skb_network_header(sock_buff);    //grab network header using accessor

  if(!sock_buff) 
  { 
    return NF_ACCEPT;
  }
  printk(KERN_INFO "\n outgoing packet...\n");

   // RULE_2 Block access to
   // seedsecuritylabs.org
   if((ip_header->daddr & 0x000000ff) == 185 && ((ip_header->daddr & 0x0000ff00) >> 8) == 199 && ((ip_header->daddr & 0x00ff0000) >> 16) == 111 && ((ip_header->daddr & 0xff000000) >> 24) == 153)
   {
      printk(KERN_INFO "\n request seedsecuritylabs.org ");
      printk(KERN_INFO "from :...%d.%d.%d.%d \n",
                     ip_header->saddr & 0x000000ff,
                     (ip_header->saddr & 0x0000ff00) >> 8,
                     (ip_header->saddr & 0x00ff0000) >> 16,
                     (ip_header->saddr & 0xff000000) >> 24);
      printk(KERN_INFO "dropping packet\n");
      return NF_DROP;
   }


   //tcp packets
   if(ip_header->protocol == 6)
   {
      tcp_header = (struct tcphdr *)((__u32 *)ip_header + ip_header->ihl);  //grab transport header    
      src_port = (unsigned int) ntohs(tcp_header->source);
      dst_port = (unsigned int) ntohs(tcp_header->dest);

      // RULE_3 Drop all out telnet packets
      //telnet request
      if(dst_port == 23)
      { 
         printk(KERN_INFO "got tcp telnet packet going\n");   
         printk(KERN_INFO "from :...%d.%d.%d.%d \n",
                      ip_header->saddr & 0x000000ff,
                      (ip_header->saddr & 0x0000ff00) >> 8,
                      (ip_header->saddr & 0x00ff0000) >> 16,
                      (ip_header->saddr & 0xff000000) >> 24);
         printk(KERN_INFO "To :...%d.%d.%d.%d \n",
                      ip_header->daddr & 0x000000ff,
                      (ip_header->daddr & 0x0000ff00) >> 8,
                      (ip_header->daddr & 0x00ff0000) >> 16,
                      (ip_header->daddr & 0xff000000) >> 24);
         printk(KERN_INFO "source port no...%d\n destinatio port no...%d\n", src_port, dst_port);   
         printk(KERN_INFO "dropping tcp telnet request packet\n");
         return NF_DROP;
      }

  }
  //end of tcp packet
  return NF_ACCEPT;
}
// end of fore outgoing packets
 
int init_module(void)
{
        printk(KERN_INFO "\nincoming packets");
        nfho_in.hook = hook_func_in;
        nfho_in.hooknum = NF_INET_PRE_ROUTING;
        nfho_in.pf = PF_INET;
        nfho_in.priority = NF_IP_PRI_FIRST;
        nf_register_hook(&nfho_in);      

        printk(KERN_INFO "\noutgoing packets");
        nfho_out.hook = hook_func_out;
        nfho_out.hooknum = NF_INET_POST_ROUTING;
        nfho_out.pf = PF_INET;
        nfho_out.priority = NF_IP_PRI_FIRST;
        nf_register_hook(&nfho_out);      
        return 0;
}
 
void cleanup_module(void)
{
        printk(KERN_INFO "\nbye");
        nf_unregister_hook(&nfho_in);     
        nf_unregister_hook(&nfho_out);     
}
