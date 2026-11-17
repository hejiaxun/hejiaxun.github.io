# Keep standalone interactive HTML reachable from the portfolio, but out of search.
Jekyll::Hooks.register :site, :post_write do |site|
  Dir.glob(File.join(site.dest, "**", "*.html")).each do |file|
    next if file == File.join(site.dest, "index.html")
    html = File.read(file, encoding: "UTF-8")
    next unless html.match?(/<head[\s>]/i)
    next if html.match?(/<meta[^>]+name=["']robots["'][^>]+content=["']noindex/i)
    html = html.sub(/<head([^>]*)>/i, '<head\1><meta name="robots" content="noindex,follow">')
    File.write(file, html)
  end
end
