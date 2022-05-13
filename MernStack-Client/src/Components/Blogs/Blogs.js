import React from 'react'
import { Helmet } from 'react-helmet-async'

function Blogs() {
  return (
    <div>
      <h2>Blogs</h2>
      <div class="row">
        <div class="col">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  1. Difference between `javascript` and `nodejs
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                  JavaScript হল একটি সাধারণ প্রোগ্রামিং ভাষা যা যেকোনো ব্রাউজারে JavaScript ইঞ্জিনে চলে। যেখানে নোড জেএস হল একটি জাভাস্ক্রিপ্ট প্রোগ্রামিং ভাষার জন্য একটি দোভাষী বা চলমান পরিবেশ যা অনেক বাড়াবাড়ি ধারণ করে, এটির জন্য লাইব্রেরি প্রয়োজন যা সহজেই জাভাস্ক্রিপ্ট প্রোগ্রামিং থেকে আরও ভাল ব্যবহারের জন্য অ্যাক্সেস করা যেতে পারে৷ জাভাস্ক্রিপ্ট যেকোন ইঞ্জিন যেমন স্পাইডার বানর ফায়ারফক্স, জাভাস্ক্রিপ্ট কোর সাফারি এ চলছে , V8 গুগল ক্রোম। সুতরাং জাভাস্ক্রিপ্ট প্রোগ্রামিং লিখতে খুব সহজ, এবং যেকোনো চলমান পরিবেশ মানে সঠিক ব্রাউজার। যেখানে নোড জেএস শুধুমাত্র V8 ইঞ্জিন সমর্থন করে, যা ক্রোম স্পেসিফিক গুগল করে। তবে এটি V8 ইঞ্জিন সমর্থন করে কিনা, লিখিত জাভাস্ক্রিপ্ট কোড যে কোনও পরিবেশে চলতে সক্ষম। সুতরাং এতে ব্রাউজার-নির্দিষ্ট কোনো বাধা নেই। জাভাস্ক্রিপ্ট সাধারণত একটি ওয়েব অ্যাপ্লিকেশনের জন্য ক্লায়েন্ট-সাইড কার্যকলাপের জন্য ব্যবহৃত হয়। একটি কার্যকলাপ কিছু সময়সূচী সময়ের ব্যবধানে বা বেসিক Ajax কল ধরণের টাস্কে ব্যবসার বৈধতা বা গতিশীল পৃষ্ঠা প্রদর্শনকে সম্বোধন করতে পারে। যে কোনো ওয়েব অ্যাপ্লিকেশনের জন্য সর্বোচ্চ সময়ের জন্য ব্যবহার করা হয়. যেখানে নোড জেএস প্রধানত নন-ব্লকিং অপারেশনের জন্য যেকোনো অপারেটিং সিস্টেম অ্যাক্সেস বা চালানোর জন্য ব্যবহৃত হয়। একটি শেল স্ক্রিপ্ট তৈরি বা চালানোর মতো একটি অপারেশন, বা একটি কলে কিছু নির্দিষ্ট হার্ডওয়্যার-সম্পর্কিত তথ্য পাওয়া বা সিস্টেমে ইনস্টল করা শংসাপত্রের বিবরণ বা অনেকগুলি সংজ্ঞায়িত কাজ একটি অপারেটিং সিস্টেমে অ-ব্লকিং।

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  2. When should you use`nodejs` and when should you use`mongodb`      </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                  সার্ভার-সাইডে ক্লাসিক ওয়েব অ্যাপ্লিকেশন তৈরি করতেও Node.js ব্যবহার করা যেতে পারে। যাইহোক, যতক্ষণ সম্ভব, এই অনুরোধ-প্রতিক্রিয়া দৃষ্টান্ত যেখানে Node.js রেন্ডার করা HTML এর কাছাকাছি বহন করবে তা সবচেয়ে সাধারণ ব্যবহারের ক্ষেত্রে নয়। এই পদ্ধতির পক্ষে এবং বিপক্ষে যুক্তি রয়েছে। এখানে বিবেচনা করার জন্য কিছু তথ্য রয়েছে৷ যদি কোনো অ্যাপ্লিকেশনে কোনো CPU নিবিড় গণনা না থাকে, তাহলে আপনি এটি জাভাস্ক্রিপ্ট টপ-টু-বটম, এমনকি ডাটাবেস স্তর পর্যন্ত তৈরি করতে পারেন যদি আপনি MongoDB-এর মতো JSON স্টোরেজ অবজেক্ট DB ব্যবহার করেন। এটি উন্নয়নকে নিয়োগ সহ উল্লেখযোগ্যভাবে সহজ করে।
                  ক্রলাররা একটি সম্পূর্ণ-রেন্ডার করা HTML প্রতিক্রিয়া পায়, যেটি অনেক বেশি SEO-বান্ধব, বলুন, Node.js-এর উপরে চালানো একটি একক পৃষ্ঠা অ্যাপ্লিকেশন বা একটি ওয়েবসকেট অ্যাপ। MongoDB হল একটি সাধারণ-উদ্দেশ্য ডেটাবেস যা অ্যাপ্লিকেশনগুলিকে সমর্থন করার জন্য বিভিন্ন উপায়ে ব্যবহৃত হয়। বিভিন্ন শিল্পে যেমন, টেলিযোগাযোগ, গেমিং, আর্থিক, স্বাস্থ্যসেবা, এবং খুচরা । MongoDB অনেকগুলি বিভিন্ন ব্যবসা এবং ফাংশনে একটি বাড়ি খুঁজে পেয়েছে কারণ এটি ডেটা ম্যানেজমেন্ট এবং সফ্টওয়্যার বিকাশে দীর্ঘস্থায়ী সমস্যার সমাধান করে। MongoDB এর জন্য সাধারণ ব্যবহারের ক্ষেত্রে অন্তর্ভুক্ত
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  3. Differences between`sql` and`nosql` databases.      </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div class="accordion-body">
                  একটি ডাটাবেস নির্বাচন করার ক্ষেত্রে সবচেয়ে বড় সিদ্ধান্ত হল একটি রিলেশনাল SQL বা নন-রিলেশনাল NoSQL ডেটা স্ট্রাকচার বেছে নেওয়া। যদিও উভয় ডাটাবেসই কার্যকর বিকল্প, তবুও উভয়ের মধ্যে কিছু মূল পার্থক্য রয়েছে যা ব্যবহারকারীদের একটি সিদ্ধান্ত নেওয়ার সময় মনে রাখতে হবে। এসকিউএল ডাটাবেসগুলিকে প্রাথমিকভাবে রিলেশনাল ডেটাবেস RDBMS বলা হয়; যেখানে NoSQL ডাটাবেসকে প্রাথমিকভাবে অ-রিলেশনাল বা বিতরণ করা ডাটাবেস বলা হয়। একটি NoSQL ডাটাবেসে অসংগঠিত ডেটার জন্য গতিশীল স্কিমা রয়েছে। ডেটা বিভিন্ন উপায়ে সংরক্ষণ করা হয় যার অর্থ এটি নথি-ভিত্তিক, কলাম-ভিত্তিক, গ্রাফ-ভিত্তিক বা কীভ্যালু স্টোর হিসাবে সংগঠিত হতে পারে। এই নমনীয়তার অর্থ হল নথিগুলি প্রথমে সংজ্ঞায়িত কাঠামো ছাড়াই তৈরি করা যেতে পারে। এছাড়াও প্রতিটি নথির নিজস্ব অনন্য কাঠামো থাকতে পারে। সিনট্যাক্স ডাটাবেস থেকে ডাটাবেসে পরিবর্তিত হয় এবং আপনি যেতে যেতে ক্ষেত্র যোগ করতে পারেন। SQL ডাটাবেস ডেটা ভিত্তিক স্ট্রাকচার্ড ক্যোয়ারী ল্যাঙ্গুয়েজ SQL সংজ্ঞায়িত করে এবং ম্যানিপুলেট করে। একদিক থেকে দেখলে এই ভাষা অত্যন্ত শক্তিশালী। SQL হল সবচেয়ে বহুমুখী এবং ব্যাপকভাবে ব্যবহৃত বিকল্পগুলির মধ্যে একটি যা এটিকে বিশেষ করে দুর্দান্ত জটিল প্রশ্নের জন্য একটি নিরাপদ পছন্দ করে তোলে। কিন্তু অন্য দিক থেকে এটি সীমাবদ্ধ হতে পারে। SQL এর সাথে কাজ করার আগে আপনার ডেটার গঠন নির্ধারণ করতে আপনাকে পূর্বনির্ধারিত স্কিমা ব্যবহার করতে হবে। এছাড়াও আপনার সমস্ত ডেটা অবশ্যই একই কাঠামো অনুসরণ করবে। এর জন্য গুরুত্বপূর্ণ আপ-ফ্রন্ট প্রস্তুতির প্রয়োজন হতে পারে যার অর্থ কাঠামোর পরিবর্তন আপনার পুরো সিস্টেমের জন্য উভয়ই কঠিন এবং বিঘ্নিত হবে।
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Blogs