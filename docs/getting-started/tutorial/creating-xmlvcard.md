---
title: Creating an XML vCard
sidebar_position: 3
---

- **vcard4** may also be used to create XML vCards (RFC 6351).

- The process of doing so is the same as explained in the [first part of the tutorial](/getting-started/tutorial/creating-vcard). The only difference is at the very end.

- Once we have the `VCARD` object, we call the `reprXML` method to create an XML vCard.

  ```js
  const vc = new VCARD([...]);

  // to get XML card
  vc.reprXML();

  ```

- That method will return a string containing Simon's vCard in XML format as below.

  :::note
  The XML returned by the `reprXML` method is not prettied/indented. I've only prettied it in the code block below to allow us to read it easily.
  :::

  ```xml
  <?xml version="1.0" encoding="UTF-8" ?>
  <vcards xmlns="urn:ietf:params:xml:ns:vcard-4.0">
    <vcard>
      <fn>
        <text>Simon Perreault</text>
      </fn>
      <n>
        <surname>Perreault</surname>
        <given>Simon</given>
        <additional />
        <prefix />
        <suffix>ing. jr</suffix>
        <suffix>M.Sc.</suffix>
      </n>
      <bday>
        <date>--0203</date>
      </bday>
      <anniversary>
        <date-time>20090808T1430-0500</date-time>
      </anniversary>
      <gender>
        <sex>M</sex>
      </gender>
      <lang>
        <parameters>
          <pref>
            <integer>1</integer>
          </pref>
        </parameters>
        <language-tag>fr</language-tag>
      </lang>
      <lang>
        <parameters>
          <pref>
            <integer>2</integer>
          </pref>
        </parameters>
        <language-tag>en</language-tag>
      </lang>
      <org>
        <parameters>
          <type>
            <text>work</text>
          </type>
        </parameters>
        <text>Viagenie</text>
      </org>
      <adr>
        <parameters>
          <type>
            <text>work</text>
          </type>
        </parameters>
        <pobox />
        <ext>Suite D2-630</ext>
        <street>2875 Laurier</street>
        <locality>Quebec</locality>
        <region>QC</region>
        <code>G1V 2M2</code>
        <country>Canada</country>
      </adr>
      <tel>
        <parameters>
          <type>
            <text>work</text>
            <text>voice</text>
          </type>
          <pref>
            <integer>1</integer>
          </pref>
        </parameters>
        <uri>tel:+1-418-656-9254;ext=102</uri>
      </tel>
      <tel>
        <parameters>
          <type>
            <text>work</text>
            <text>cell</text>
            <text>voice</text>
            <text>video</text>
            <text>text</text>
          </type>
        </parameters>
        <uri>tel:+1-418-262-6501</uri>
      </tel>
      <email>
        <parameters>
          <type>
            <text>work</text>
          </type>
        </parameters>
        <text>simon.perreault@viagenie.ca</text>
      </email>
      <geo>
        <parameters>
          <type>
            <text>work</text>
          </type>
        </parameters>
        <uri>geo:46.772673,-71.282945</uri>
      </geo>
      <key>
        <parameters>
          <type>
            <text>work</text>
          </type>
        </parameters>
        <uri>http://www.viagenie.ca/simon.perreault/simon.asc</uri>
      </key>
      <tz>
        <utc-offset>-0500</utc-offset>
      </tz>
      <url>
        <parameters>
          <type>
            <text>home</text>
          </type>
        </parameters>
        <uri>http://nomis80.org</uri>
      </url>
    </vcard>
  </vcards>
  ```
