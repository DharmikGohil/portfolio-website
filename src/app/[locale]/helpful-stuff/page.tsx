import React from 'react';
import { Flex, Heading, Text } from '@/once-ui/components';
import styles from './HelpfulStuff.module.scss';

const categories = [
  {
    title: 'Books',
    resources: [
      {
        title: "Designing Data-Intensive Applications (PDF)",
        type: "Book (PDF)",
        description: "A must-read book for anyone interested in building scalable, reliable, and maintainable systems. Covers data modeling, storage, distributed systems, and more.",
        link: "https://github.com/letthedataconfess/Data-Engineering-Books/blob/main/Book-2Designing-data-intensive-applications.pdf",
      },
    ],
  },
  {
    title: 'Blog Posts',
    resources: [
      {
        title: "Getting Started with CI/CD: An Introductory Guide to GitHub Actions for New Developers",
        type: "Blog Post",
        description: "A beginner-friendly guide to setting up CI/CD pipelines using GitHub Actions.",
        link: "https://medium.com/@shivambhadani_/getting-started-with-ci-cd-an-introductory-guide-to-github-actions-for-new-developers-f216d87f4dab",
      },
      {
        title: "Introduction to RPC in Go: Building RPC Client and Server with Golang",
        type: "Blog Post",
        description: "Learn the basics of Remote Procedure Calls (RPC) in Go, with hands-on examples for building clients and servers.",
        link: "https://medium.com/@shivambhadani_/introduction-to-rpc-in-go-building-rpc-client-and-server-with-golang-5794675e9a12",
      },
      {
        title: "AWS Part 1: Introduction to Cloud and EC2",
        type: "Blog Post",
        description: "An introduction to cloud computing and Amazon EC2 for beginners.",
        link: "https://medium.com/@shivambhadani_/aws-part-1-introduction-to-cloud-and-ec2-f06cdc80a1fc",
      },
      {
        title: "AWS Part 2: A Beginner's Guide to Understanding AWS EBS Volumes",
        type: "Blog Post",
        description: "A simple guide to understanding and using AWS EBS Volumes.",
        link: "https://medium.com/@shivambhadani_/aws-part-2-a-beginners-guide-to-understanding-aws-ebs-volumes-a6f87b1140c8",
      },
      {
        title: "AWS Part 3: Horizontal Scaling and Load Balancer",
        type: "Blog Post",
        description: "Learn about horizontal scaling and how to use load balancers in AWS.",
        link: "https://medium.com/@shivambhadani_/aws-part-3-horizontal-scaling-and-load-balancer-223d005ef11e",
      },
      {
        title: "AWS Part 4: Step-by-Step Guide to Create Your First AWS Auto Scaling Group",
        type: "Blog Post",
        description: "A practical, step-by-step guide to setting up your first AWS Auto Scaling Group.",
        link: "https://medium.com/@shivambhadani_/aws-part-4-step-by-step-guide-to-create-your-first-aws-auto-scaling-group-826c1effc0ec",
      },
      {
        title: "AWS Part 5: Learn Complete AWS VPC in Just One Article",
        type: "Blog Post",
        description: "A comprehensive article to understand AWS VPC concepts easily.",
        link: "https://medium.com/@shivambhadani_/aws-part-5-learn-complete-aws-vpc-in-just-one-article-5ffe34888a5c",
      },
    ],
  },
  {
    title: 'Playlists',
    resources: [
      {
        title: "locked in",
        type: "Spotify Playlist",
        description: "A cinematic and inspiring playlist curated by Amrit. Features tracks from Hans Zimmer, Ludwig Göransson, Trent Reznor, and more. Perfect for deep work or creative sessions.",
        link: "https://open.spotify.com/playlist/7qAqw0o2NXjiNpa5k4WcqE?nd=1&dlsi=744a513071d840cf",
        credit: "by @amritwt (https://x.com/amritwt)"
      },
    ],
  },
];

export default function HelpfulStuffPage() {
  return (
    <>
      <Flex fillWidth maxWidth="s" direction="column">
        <Heading marginBottom="l" variant="display-strong-s">
          Helpful Stuff
        </Heading>
        <Flex direction="column" gap="xl" fillWidth>
          {categories.map((cat, catIdx) => (
            <Flex key={catIdx} direction="column" gap="l" fillWidth>
              <Heading as="h2" variant="display-strong-xs" marginBottom="m">
                {cat.title}
              </Heading>
              <Flex direction="column" gap="l" fillWidth>
                {cat.resources.map((res, idx) => (
                  <Flex
                    key={idx}
                    direction="column"
                    className={styles.resourceCard}
                  >
                    <Heading as="h3" variant="display-strong-xs" marginBottom="xs">
                      {res.title}{' '}
                      <Text as="span" variant="body-default-m" onBackground="neutral-weak">
                        ({res.type})
                      </Text>
                    </Heading>
                    <Text as="p" variant="body-default-l" marginBottom="m">
                      {res.description}
                    </Text>
                    <a
                      href={res.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.resourceLink}
                    >
                      {res.type === 'Book (PDF)' ? 'Read Book' : res.type === 'Spotify Playlist' ? 'Listen on Spotify' : 'Read Blog'}
                    </a>
                    {res.credit && (
                      <Text as="span" variant="body-default-s" onBackground="neutral-weak" marginTop="xs">
                        {res.credit}
                      </Text>
                    )}
                  </Flex>
                ))}
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </>
  );
}