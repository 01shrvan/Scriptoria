import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react';
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSlug from 'rehype-slug';
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import matter from "gray-matter";
import fs from "fs";
import Onthispage from '@/components/Onthispage';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { rehypePrettyCode } from 'rehype-pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
    params: { slug: string, title: string, description: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function BlogPage({ params }: { params: { slug: string } }) {
    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        .use(rehypeSlug)
        .use(rehypePrettyCode, {
            theme: "github-dark",
            transformers: [
                transformerCopyButton({
                    visibility: 'always',
                    feedbackDuration: 3_000,
                }),
            ],
        })
        .use(rehypeAutolinkHeadings);

    const filePath = `content/${params.slug}.md`;
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    const htmlContent = (await processor.process(content)).toString();

    return (
        <MaxWidthWrapper className='prose dark:prose-invert'>
            <div className='flex flex-col md:flex-row'>
                <div className='px-4 md:px-16 md:w-3/4'>
                    <h1>{data.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
                </div>
                <div className='md:w-1/4 md:pl-8'>
                    <div className="sticky top-16">
                        <Onthispage className="text-sm" htmlContent={htmlContent} />
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    );
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const filePath = `content/${params.slug}.md`;
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
        title: `${data.title} - ProgrammingWithHarry`,
        description: data.description,
    };
}